import styles from '../../styles/Dashboard.module.css'
import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { selectBarrowsGroups, selectIncreaseAmount } from '../Redux/merchantSlice';
import { useAppSelector } from '../Redux/hooks';



const BarrowsSets = (props: any) => {

    const barrowsGroups = useAppSelector(selectBarrowsGroups);
    const increaseAmount = useAppSelector(selectIncreaseAmount);
    const [userPrices, setUserPrices] = useState([]);
    const [render, setRender] = useState(false);

    const componentItemRow = ((item: any, id: number) => {

        const setUserPrice = (status: string, price: number) => {
            let newUserPrices = userPrices;
            newUserPrices[(status === 'fixed' ? item.fixedId : item.brokenId)] = price + increaseAmount;
            setUserPrices(newUserPrices);
            setRender(!render);
        };

        const resetUserPrice = (status: string) => {
            let newUserPrices = userPrices;
            newUserPrices[(status === 'fixed' ? item.fixedId : item.brokenId)] = undefined;
            setUserPrices(newUserPrices);
            setRender(!render);
        }

        const rowStyleFixed = () => {
            if (userPrices[item.fixedId] && userPrices[item.fixedId] < item.priceFixed) {
                return styles.badPriceRow;
            } else {
                return '';
            }
        }

        const rowStyleBroken = () => {
            if (userPrices[item.brokenId] && userPrices[item.brokenId] < item.priceBroken) {
                return styles.badPriceRow;
            } else {
                return '';
            }
        }

        return (
            <div key={id} className={styles.barrowsPair}>
                <div className={'grid ' + rowStyleFixed()}>
                    <div className="col-7">
                        <div className="grid">
                            <div className="col-4" style={{ marginTop: '10px' }}>{item.fixedName}</div>
                            <div className="col-4" style={{ marginTop: '10px' }}>{'Buy: ' + item.priceFixed}</div>
                            <div className="col-4" style={{ marginTop: '10px' }}>{userPrices[item.fixedId] !== undefined ? userPrices[item.fixedId] : ''}</div>
                        </div>
                    </div>
                    <div className="col-2">
                        {(item.priceBroken > item.priceFixed) ? <i className="pi pi-check" style={{ 'fontSize': '2em', marginRight: '10px' }}></i> :
                            null}
                    </div>
                    <div className="col-1">
                        <Button label="Set" onClick={() => setUserPrice('fixed', item.priceFixed)} />
                    </div>
                    <div className="col-1">
                        <Button label="Reset" onClick={() => resetUserPrice('fixed')} />
                    </div>
                </div>
                <div className={'grid ' + rowStyleBroken()}>
                    <div className="col-7">
                        <div className="grid">
                            <div className="col-4" style={{ marginTop: '10px' }}>{item.brokenName}</div>
                            <div className="col-4" style={{ marginTop: '10px' }}>{'Buy: ' + item.priceBroken}</div>
                            <div className="col-4" style={{ marginTop: '10px' }}>{userPrices[item.brokenId] !== undefined ? userPrices[item.brokenId] : ''}</div>
                        </div>
                    </div>
                    <div className="col-2">
                        {(item.priceBroken < item.priceFixed) ? <i className="pi pi-check" style={{ 'fontSize': '2em' }}></i> :
                            null}
                    </div>
                    <div className="col-1">
                        <Button label="Set" onClick={() => setUserPrice('broken', item.priceBroken)} />
                    </div>
                    <div className="col-1">
                        <Button label="Reset" onClick={() => resetUserPrice('broken')} />
                    </div>
                </div>
                <div className={styles.divider}></div>
            </div>
        )
    });

    const productItemRow = ((item: any, id: number) => {

        const setUserPrice = () => {
            let newUserPrices = userPrices;
            newUserPrices[item.setId] = item.priceSet + increaseAmount;
            setUserPrices(newUserPrices);
        };

        const resetUserPrice = () => {
            let newUserPrices = userPrices;
            newUserPrices[item.setId] = undefined;
            setUserPrices(newUserPrices);
        }

        const rowStyle = () => {
            if (userPrices[item.setId] && userPrices[item.setId] > item.priceSet) {
                return styles.badPriceRow;
            } else {
                return '';
            }
        }

        return (
            <div style={{paddingRight: '5px'}} className={'grid ' + rowStyle()} key={id}>
                <div className="col-7">
                    <div className="grid">
                        <div className="col-4" style={{ marginTop: '10px' }}>{item.name}</div>
                        <div className="col-4" style={{ marginTop: '10px' }}>{'Buy: ' + item.priceSet}</div>
                        <div className="col-4" style={{ marginTop: '10px' }}>{userPrices[item.setId] !== undefined ? userPrices[item.setId] : ''}</div>
                    </div>
                </div>
                <div className="col-2">
                </div>
                <div className="col-1">
                    <Button label="Set" onClick={() => setUserPrice()} />
                </div>
                <div className="col-1">
                    <Button label="Reset" onClick={() => resetUserPrice()} />
                </div>
            </div>
        )
    });



    const recipeCard = ((itemGroup: any, id: number) => {

        let product = itemGroup.items.filter((item: any) => item.processingPhase === 'product')[0];
        return (
            <div className="col-6" key={id}>
                <Card title={product.name}>
                    <div className="grid">
                        <div className="col-6">
                            <h3 className={itemGroup.maxProfit <= 0 ? styles.badPriceRow : ''} style={{ marginTop: '-15px', marginBottom: '10px' }}>
                                {'Maximum Profit: ' + itemGroup.maxProfit}
                            </h3>
                        </div>
                        <div className="col-7">
                            <div className="grid">
                                <div className="col-4" style={{ marginTop: '10px' }}>Name</div>
                                <div className="col-4" style={{ marginTop: '10px' }}>Price</div>
                                <div className="col-4" style={{ marginTop: '10px' }}>Active Price</div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="grid">
                                <div className="col-12" style={{ marginTop: '10px' }}>Cheapest</div>
                            </div>
                        </div>
                    </div>
                    {
                        itemGroup.items.map((item: any, key: number) => {
                            if (!item.setId) {
                                return componentItemRow(item, key);
                            } else {
                                return productItemRow(item, key);
                            }
                        })
                    }
                </Card>
            </div>
        );
    });

    const buildRecipeCards = () => {
        return (
            <>
                {
                    barrowsGroups.map((group: any, id: number) => {
                        return recipeCard(group, id);
                    })
                }
            </>
        )
    }


    return (
        <>
            <div className="grid">
                {buildRecipeCards()}
            </div>


        </>
    )

}


export default BarrowsSets;
