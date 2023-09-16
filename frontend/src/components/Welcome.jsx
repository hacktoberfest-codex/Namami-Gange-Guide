import React from 'react';
import { ChachaChaudhary } from 'assets/images';

const Welcome = () => (
	<div className='bg-white border-gray-200 border-2 rounded-lg px-8 py-5 mr-20 w-full my-3'>
		<div className='flex flex-row justify-start items-center'>
			<img className='w-20 h-20 rounded-full border-gray-400 mr-2' src={ChachaChaudhary} alt='Chacha Chaudhary' />
			<h1 className='text-2xl font-bold mb-2'> Hello, I am Chacha Chaudhary Bot</h1>
		</div>
		<p>
			I am help you out to get a better understanding of <span className='text-lg font-semibold underline underline-offset-2'>Ganga Ghat</span>. I am also available to answer your questions related to this place. Hello, I am Chacha Chaudhary Bot
		</p>
	</div>
);

export default Welcome;
