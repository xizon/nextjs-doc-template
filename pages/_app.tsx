import type { AppProps } from 'next/app';
import Head from 'next/head';


// using disk cache
import '../public/assets/css/bootstrap/5.2.3/bootstrap.min.css';
import '../public/assets/css/fontawesome/6.3.0/all.min.css';
import '../src/styles/globals.scss';


function MyApp({ Component }: AppProps) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>

            <Component />
        </>

    )
}

export default MyApp;
