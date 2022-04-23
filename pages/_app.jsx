import { useState, useEffect } from 'react';

import Head from 'next/head';

import GlobalContextProvider from '../components/context/index.jsx';
import Header from '../components/panel/Header';
import Navigation from '../components/panel/Navigation';
import Splash from '../components/panel/Splash';

import '../styles/globals.scss';

export default function MyApp (props) {
	const { Component, pageProps, pageProps: { staticUser } } = props,
		[pageLoaded, setPageLoaded] = useState(false),
		[removeSplash, setRemoveSplash] = useState(false),
		[navActive, setNavActive] = useState(false);

	useEffect(() => {
		pageLoaded && setTimeout(() => setRemoveSplash(true), 2200);
	}, [pageLoaded]);

	return (
		<GlobalContextProvider staticUser={staticUser}>
			<Head><title>{staticUser?.name}</title></Head>
			{ Component.displayName != 'ErrorPage' && !removeSplash && <Splash loaded={pageLoaded} /> }
			<Header navActive={navActive} setNavActive={setNavActive} />
			<Navigation active={navActive} />
			<Component {...pageProps} setPageLoaded={setPageLoaded} />
		</GlobalContextProvider>
	);
}
