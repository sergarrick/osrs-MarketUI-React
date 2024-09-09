import React, { useEffect, useState } from 'react';
import { setGroups } from './Redux/merchantSlice';
import { useAppDispatch, useAppSelector } from './Redux/hooks';
import { Button } from 'primereact/button';
import { selectUser } from './Redux/userSlice';



const Timer = (props: any) => {

    const dispatch = useAppDispatch();
    const [counter, setCounter] = useState(0);
    const user = useAppSelector(selectUser);


    const fetchData = async () => {
        const response = await fetch('http://prices.runescape.wiki/api/v1/osrs/latest', {
            method: 'GET',
            headers: {
                'User-Agent': user.userAgent,
                'From': user.email,
                'Origin': 'http://localhost:3000',
            },
        });
        const json = await response.json();
        setCounter(0);
        dispatch(setGroups(json.data));
    };

    const syncTimer = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
        const counterInterval = setInterval(() => {
            setCounter(prevCount => {
                if (prevCount === 60) {
                    fetchData();
                    console.log('fetching');
                    return 0;
                }
                return prevCount + 1
            });
        }, 1000);
        return () => {
            clearInterval(counterInterval);
        };
    }, []);


    return (
        <div className="grid">
            <div className="col-6"></div>
            <div className="col-3"><h2>Timer: {60 - counter}</h2></div>
            <div className="col-3"><Button label="Syncronize" onClick={() => syncTimer()} /></div>
        </div>
    )

}


export default Timer;
