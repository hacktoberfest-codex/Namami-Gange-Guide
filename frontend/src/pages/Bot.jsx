import React, { Fragment, useContext, useState } from 'react';
import speaking from 'assets/chacha-cahaudhary/Lspeaking-bg.png';
import ChatBot from './ChatBot';
import { BotStateContext } from 'context/BotState';

const Bot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { botState, setBotState } = useContext(BotStateContext)

	const handleButton = () => {
		console.log('clicked');
		setIsOpen(prev => !prev);
	};
	// idle  , waiting
	return (
		<section className='flex flex-row items-end px-3 py-4 '>
			<img className='w-[20%]' src={speaking} alt='Chacha Chaudhary' onClick={handleButton} />
			<div className={`w-[90%] ${isOpen ? 'block' : 'hidden'}`}>
				{/* if state === idle for few seconds close chatbot */}
				<ChatBot />
			</div>
		</section>
	);
};

export default Bot;
