import { useState } from 'react';

import Head from 'next/head';
import { Provider } from 'react-redux';

import Header from '../components/panels/header/Header';
import { store } from '../data/redux/store';
import '../styles/globals.scss';

export default function MyApp (props) {
	const { Component, pageProps, pageProps: { staticUser } } = props,
		[pageLoaded, setPageLoaded] = useState(false),
		[navActive, setNavActive] = useState(false);


	return (
		<Provider store={store}>
			<Head><title>{staticUser?.name}</title></Head>
			<Header navActive={navActive} setNavActive={setNavActive} />
			<Component {...pageProps} setPageLoaded={setPageLoaded} />
		</Provider>
	);
}
