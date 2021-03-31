import '../styles/globals.scss';
import App from 'next/app';
import Head from 'next/head';
import {getStrapiMedia} from "../lib/media";
import {fetchAPI} from "../lib/api";
import {createContext} from "react";
import {useRouter} from "next/router";
import Loading from "../components/loading";
import NotFound from "../components/not-found";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if(router.isFallback) return <Loading />

  const {global} = pageProps;

  return <>
    <Head>
      <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      <title>Fenomenal Funds</title>
    </Head>
    <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  </>
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
}

export default MyApp;