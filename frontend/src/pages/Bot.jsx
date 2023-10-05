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
		<>
		<section className={` ${isOpen ? 'hidden' : 'block'} font-sans text-center text-lg bg-slate-50 m-5 p-3 rounded-full `} >
				To know more about holy river Ganga about it's history, significance and beyond..! Try a converstaion with <div className='inline font-bold'>Chacha Chaudhary</div> by clicking on him.
			</section>
		<section className='flex flex-row items-end px-3 py-4 '>
			<img className='w-[20%] cursor-pointer' src={speaking} alt='Chacha Chaudhary' onClick={handleButton} />
			<div className={`w-[90%] ${isOpen ? 'block' : 'hidden'}`}>
				<ChatBot />
			</div>
		</section>
		</>
	);
};

export default Bot;
