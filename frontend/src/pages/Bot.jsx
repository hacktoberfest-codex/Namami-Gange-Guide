import React, { Fragment, useState } from 'react';
import resting from 'assets/chacha-cahaudhary/Lresting-bg.png';
import speaking from 'assets/chacha-cahaudhary/Lspeaking-bg.png';
import thinking from 'assets/chacha-cahaudhary/Lresting-bg.png';
import ChatBot from './ChatBot';

const Bot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleButton = () => {
		console.log('clicked');
		setIsOpen(true);
	};
	return (
		<Fragment>
			<div className='flex flex-row items-end'>
				<button onClick={handleButton}>
					<img className='w-40 h-40 object-contain' src={speaking} alt='Chacha Chaudhary' />
				</button>
				{isOpen && <ChatBot />}
			</div>
		</Fragment>
	);
};

export default Bot;
