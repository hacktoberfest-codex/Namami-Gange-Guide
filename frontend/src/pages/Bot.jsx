import React, { useState } from 'react'
import resting from 'assets/chacha-cahaudhary/Lresting-bg.png'
import speaking from 'assets/chacha-cahaudhary/Lspeaking-bg.png'
import thinking from 'assets/chacha-cahaudhary/Lresting-bg.png'
import ChatBot from './ChatBot';


function Bot() {
    const [isOpen, setisOpen] = useState(false);
    const handlebutton = () => {
        console.log('clicked')
        setisOpen(true);

    }
    return (
        <>
            <div className='flex flex-row items-start mb-0 ml-0 mt-32'>
                <button onClick={handlebutton}>
                    <img src={speaking} alt="" srcset="" />
                </button>
                {isOpen && <ChatBot />}
            </div>
        </>
    )
}

export default Bot
