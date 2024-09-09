import '../styles/globals.css'
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Provider } from 'react-redux';
import { store } from '../Components/Redux/store';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>OSRS Merchant's Assistant</title>
                <meta name="description" content="Garrick & Parker Servello" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Provider store={store}>
                    < Component {...pageProps} />
                </Provider>
            </main>
        </>
    ) 
}
