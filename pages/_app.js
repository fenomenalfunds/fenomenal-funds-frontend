import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from 'next/app';
import Head from 'next/head';
import {getStrapiMedia} from "../lib/media";
import {fetchAPI} from "../lib/api";
import {createContext} from "react";
import {useRouter} from "next/router";
import Loading from "../components/loading";
import NotFound from "../components/not-found";
import Navigation from "../components/navigation";
import _ from 'lodash';
import {redirectUser} from "../lib/auth";
import {parseCookies} from "nookies";

export const GlobalContext = createContext({});

function MyApp({Component, pageProps}) {
	const router = useRouter();
	if (router.isFallback) return <Loading/>;

	const {global, navigation, session} = pageProps;
	if (!global) return <NotFound/>;

	return <>
		<Head>
			<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
			<meta name="theme-color" content="#fff"/>
			<link rel="shortcut icon" href={getStrapiMedia(global.favicon)}/>
			<title>Fenomenal Funds</title>
		</Head>

		<GlobalContext.Provider value={global}>
			<Navigation items={navigation} user={session}/>
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

	console.log('NAVIGATION  ', navigation);

	let cookies = parseCookies(ctx.ctx);

	if(!cookies.jwt) {
		if(ctx.router.pathname === '/user/profile' || ctx.router.pathname === '/resources') {
			redirectUser(ctx.ctx, '/login');
		}
	}

	return {
		...appProps,
		pageProps: {
			global,
			navigation,
			session: {
				fullname: cookies.fullname || '',
				photo: {url: cookies.photo} || {}
			}
		}
	};
}

export default MyApp;