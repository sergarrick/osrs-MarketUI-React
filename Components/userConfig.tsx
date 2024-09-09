import React, { useEffect, useState } from 'react';
import { selectIncreaseAmount, setGroups, setIncreaseAmount } from './Redux/merchantSlice';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { InputText } from 'primereact/inputtext';



const userConfig = (props: any) => {

    const dispatch = useAppDispatch();
    const increaseAmount = useAppSelector(selectIncreaseAmount);

    useEffect(() => {
    }, []);




    return (
        <div className="grid">
            <div className="col-6">
                <span className="p-float-label">
                    <InputText id="increase" value={increaseAmount} onChange={(e: any) => dispatch(setIncreaseAmount(parseInt(e.target.value)))} />
                    <label htmlFor="increase">Price Change</label>
                </span>
            </div>
        </div>
    )

}


export default userConfig;
