import React, { Fragment, useState } from 'react';
import resting from 'assets/chacha-cahaudhary/Lresting-bg.png';
import speaking from 'assets/chacha-cahaudhary/Lspeaking-bg.png';
import thinking from 'assets/chacha-cahaudhary/Lresting-bg.png';
import ChatBot from './ChatBot';

function Bot() {
	const [isOpen, setisOpen] = useState(false);
	const handlebutton = () => {
		console.log('clicked');
		setisOpen(true);
	};
	return (
		<Fragment>
			<div className='flex flex-row items-end relative bottom-0'>
				<button onClick={handlebutton} className=''>
					<img className='w-40 h-40 object-contain' src={speaking} alt='Chacha Chaudhary' />
				</button>
				{isOpen && <ChatBot />}
			</div>
		</Fragment>
	);
}

export default Bot;
