import React, { Fragment, useState } from 'react';
import speaking from 'assets/chacha-cahaudhary/Lspeaking-bg.png';
import ChatBot from './ChatBot';

const Bot = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleButton = () => {
		console.log('clicked');
		setIsOpen(prev => !prev);
	};

	return (
		<section className='flex flex-row items-end px-3 py-4 '>
			<img className='w-[20%]' src={speaking} alt='Chacha Chaudhary' onClick={handleButton} />
			<div className={`w-[90%] ${isOpen ? 'block' : 'hidden'}`}>
				<ChatBot />
			</div>
		</section>
	);
};

export default Bot;
