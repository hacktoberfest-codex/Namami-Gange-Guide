import { Carousel } from 'components';
import React, { Fragment } from 'react';

const RiveringEcology = () => {
	return (
		<Fragment>
			<div className='heading'>
				<h1 className='text-3xl flex justify-center items-center bg-blue-200'>Hello this is riverine ecology page!!!</h1>
			</div>
			<div className='carousel border-2 border-green-500'>
				<Carousel />
			</div>

			<div className='info'></div>
		</Fragment>
	);
};

export default RiveringEcology;
