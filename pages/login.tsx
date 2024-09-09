import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '.././Components/Redux/hooks';
import { setEmail, setUserAgent } from '../Components/Redux/userSlice';


export default function Login() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [localAgent, setLocalAgent] = useState('');
    const [localEmail, setLocalEmail] = useState('');


    useEffect(function () {
        console.log(window.localStorage);
        setLocalAgent(window.localStorage.getItem('agent'));
        setLocalEmail(window.localStorage.getItem('email'));
    }, []);


    const login = () => {
        window.localStorage.setItem('agent', localAgent);
        window.localStorage.setItem('email', localEmail);
        dispatch(setUserAgent(localAgent));
        dispatch(setEmail(localEmail));
        router.push('/dashboard');
    }

    return (
        <>
            <div className="grid" style={{ width: '100%' }}>
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div>
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                </div>
                <div className="col-4">
                    <span className="p-float-label">
                        <InputText id="agent" value={localAgent} onChange={(e) => setLocalAgent(e.target.value)} />
                        <label htmlFor="agent">User Agent</label>
                    </span> <br></br>
                    <span className="p-float-label">
                        <InputText id="email" value={localEmail} onChange={(e) => setLocalEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </span> <br></br>
                    <Button label="Submit" onClick={login} />
                </div>
                <div className="col-4">
                </div>
            </div>


        </>
    )
}
