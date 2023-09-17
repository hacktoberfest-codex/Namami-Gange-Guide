import { Carousel } from 'components';
import React, { Fragment } from 'react';
import Bot from './Bot';

const Home = () => {
	return (
		<section className='w-full h-screen bg-[wheat]'>
			<Carousel />
			<Bot />
		</section>
	);
};

export default Home;
