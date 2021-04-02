import '../styles/globals.scss';
import App from 'next/app';
import Head from 'next/head';
import {getStrapiMedia} from "../lib/media";
import {fetchAPI} from "../lib/api";
import {createContext} from "react";
import {useRouter} from "next/router";
import Loading from "../components/loading";

export const GlobalContext = createContext({});

function MyApp({Component, pageProps}) {
	const router = useRouter();
	if (router.isFallback) return <Loading/>

	const {global, navigation} = pageProps;

	{/*console.info('NAVIGATION +++++++++', navigation)*/}

	return <>
		<Head>
			<link rel="shortcut icon" href={getStrapiMedia(global.favicon)}/>
			<title>Fenomenal Funds</title>
		</Head>
		<GlobalContext.Provider value={global}>
			<Component {...pageProps} />
		</GlobalContext.Provider>
	</>
}

MyApp.getInitialProps = async (ctx) => {
	const appProps = await App.getInitialProps(ctx);
	const [global, navigation] = await Promise.all([
		fetchAPI("/global"),
		fetchAPI('/navigation/render/1?type=tree')
	]);
	return {
		...appProps,
		pageProps: {
			global,
			navigation
		}
	};
}

export default MyApp;