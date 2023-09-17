import { Carousel, NavBar } from 'components';
import React, { Fragment } from 'react';
import Bot from './Bot';

const Home = () => {
	return (
		<section className='w-full min-h-screen flex flex-col bg-[wheat]'>
			<NavBar />
			<Carousel />
			<Bot />
		</section>
	);
};

export default Home;
