import styles from '../../styles/Dashboard.module.css'
import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { selectIncreaseAmount, selectProcessingGroups } from '../Redux/merchantSlice';
import { useAppSelector } from '../Redux/hooks';
import { Inplace, InplaceContent, InplaceDisplay } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';


const Processing = (props: any) => {

    const processingGroups = useAppSelector(selectProcessingGroups);
    const increaseAmount = useAppSelector(selectIncreaseAmount);
    const [userPrices, setUserPrices] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [render, setRender] = useState(false);

    const itemRow = ((item: any, id: number) => {
        let price = item.processingPhase === 'component' ? item.low : item.high;
        let userPrice = userPrices[item.id];

        const setUserPrice = (inputPrice?: number) => {
            let newUserPrices = userPrices;
            if (inputPrice) {
                newUserPrices[item.id] = inputPrice;
            } else {
                newUserPrices[item.id] = price + ((item.processingPhase === 'component') ? increaseAmount : -increaseAmount);
            }
            setUserPrices(newUserPrices);
            setRender(!render);
            console.log(userPrice);
        };

        const resetUserPrice = () => {
            let newUserPrices = userPrices;
            newUserPrices[item.id] = undefined;
            setUserPrices(newUserPrices);
            setRender(!render)
        }

        const rowStyle = () => {
            if (userPrice && item.processingPhase === 'component' && userPrice < price) {
                return styles.badPriceRow;
            } else if (userPrice && item.processingPhase === 'product' && userPrice > price) {
                return styles.badPriceRow;
            } else if (userPrice && item.processingPhase === 'component' && userPrice >= price) {
                return styles.goodPriceRow;
            } if (userPrice && item.processingPhase === 'product' && userPrice <= price) {
                return styles.goodPriceRow;
            } else {
                return '';
            }
        }

        return (

            <span key={id}>
                <div className={item.processingPhase === 'product' ? styles.divider: ''}></div>
                <div style={item.processingPhase === 'product' ? { marginTop: '10px' } : {}}  className={'grid ' + rowStyle()}>
                    <div className="col-9">
                        <div className="grid">
                            <div className="col-3" style={{marginTop: '10px'}}>{item.name}</div>
                            <div className="col-3" style={{marginTop: '10px', height: '55px'}}>{item.processingPhase === 'component' ? 'Buy: ' + price : 'Sell: ' + price}</div>
                            <div className="col-6" style={{ marginTop: '10px' }}>
                                {userPrice ?
                                    <Inplace closable>
                                        <InplaceDisplay>
                                                {userPrice}
                                        </InplaceDisplay>
                                        <InplaceContent>
                                            <InputText style={{width: '125px', height: '45px', marginTop: '-10px', paddingTop: '-10px'}}
                                                id="in" value={userPrice} onChange={(e) => setUserPrice(parseInt(e.target.value))} />
                                        </InplaceContent>
                                    </Inplace>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <Button label="Set" onClick={() => setUserPrice()} />
                    </div>
                    <div className="col-1">
                        <Button label="Reset" onClick={resetUserPrice} />
                    </div>
                </div>
            </span>
        )


    });

    const recipeCard = ((itemGroup: any, id: number) => {
        let product = itemGroup.items.filter((item: any) => item.processingPhase === 'product')[0];

        const moveGroup = (order: string | undefined) => {
            let newPriorities = priorities;
            newPriorities[itemGroup.id] = order;
            setPriorities(newPriorities);
            setRender(!render);
        }

        const header = (
            <div className="grid">
                <div className="col-10" style={{paddingLeft: '20px', marginTop: '10px'}}>
                    <h2>{itemGroup.product}</h2>
                </div>
                <div className="col-1">
                </div>
                <div className="col-1" style={{ marginTop: '10px' }}>
                    {
                        (priorities[itemGroup.id] === 'top') ?
                            <i className="pi pi-star-fill" style={{ 'fontSize': '1em', cursor: 'pointer' }} onClick={() => moveGroup(undefined)}></i>
                        : null
                    }
                    {
                        (priorities[itemGroup.id] === 'bottom') ?
                            <i className="pi pi-ban" style={{ 'fontSize': '1em', cursor: 'pointer' }} onClick={() => moveGroup(undefined)}></i>
                            : null
                    }
                </div>
            </div>
        );

        return (
            <div className="col-6" key={id}>
                <Card header={header}>
                    <div className="grid" style={{ marginTop: '-15px', marginBottom: '10px' }}>
                        <div className="col-9">
                            <h3 className={itemGroup.profit <= 0 ? styles.badPriceRow : ''} >
                                {'Profit: ' + itemGroup.profit}
                            </h3>
                        </div>
                        <div className="col-3" style={{ marginTop: '-15px' }} >
                            <Button icon="pi pi-arrow-up" onClick={() => moveGroup('top')} />
                            <Button icon="pi pi-arrow-down" onClick={() => moveGroup('bottom')}/>
                        </div>
                        <div className="col-9">
                            <div className="grid">
                                <div className="col-3" style={{ marginTop: '10px' }}>Name</div>
                                <div className="col-3" style={{ marginTop: '10px' }}>Price</div>
                                <div className="col-6" style={{ marginTop: '10px' }}>Active Price</div>
                            </div>
                        </div>
                    </div>
                    {
                        itemGroup.items.map((item: any, key: number) => {
                            return itemRow(item, key);
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
                    processingGroups.map((group: any, id: number) => {
                        if (priorities[group.id] === 'top') {
                            return recipeCard(group, id);
                        }
                    })
                }
                {
                    processingGroups.map((group: any, id: number) => {
                        if (priorities[group.id] === undefined) {
                            return recipeCard(group, id);
                        }
                    })
                }
                {
                    processingGroups.map((group: any, id: number) => {
                        if (priorities[group.id] === 'bottom') {
                            return recipeCard(group, id);
                        }
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


export default Processing;
