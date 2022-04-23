import { useEffect } from 'react';

import Head from 'next/head';
import { Provider, useDispatch } from 'react-redux';

import Header from '../components/panels/header/Header.jsx';
import { store } from '../data/redux/store';
import '../styles/globals.scss';
import { populateTodo } from '../data/redux/todoReducer.js';
import { useSession } from '../utils/fetcher.js';

const GetTodo = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		fetch('/api/getTodo').then((res) => res.json().then((data) => dispatch(populateTodo(data))));
	}, [dispatch]);

	return null;
};

export default function MyApp (props) {
	const { Component, pageProps } = props,
		{ name } = useSession();

	return (
		<Provider store={store}>
			<Head><title>{`Flurry${name ? ` • ${name}` : ''}`}</title></Head>
			<GetTodo />
			<Header />
			<Component {...pageProps} />
		</Provider>
	);
}
