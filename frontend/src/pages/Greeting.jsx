import React, { Fragment, useEffect, useState } from 'react'
import greetImg from '../assets/chacha-cahaudhary/chacha.webp'
import Home from './Home';


function Greeting() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 1000)
    }, [])

    return (

        <Fragment>
            <div className='flex flex-col justify-center items-center '>
                <div >
                    <img src={greetImg} alt="" />
                </div>
                <div className='text-3xl'>
                    Welcome <span>Have a integrating learning about the NMCG flagship programe</span>
                </div>
            </div>
            {redirect && <Home />}
        </Fragment>
    )
}

export default Greeting
