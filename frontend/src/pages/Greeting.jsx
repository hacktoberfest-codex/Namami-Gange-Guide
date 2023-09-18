import React, { Fragment, useEffect, useState } from 'react'
import greetImg from '../assets/chacha-cahaudhary/chacha.webp'
import { useNavigate } from "react-router-dom";


function Greeting() {
    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            return navigate("/home");
        }, 1000)

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (

        <Fragment>
            <div className='flex flex-col justify-center items-center '>
                <div >
                    <img src={greetImg} alt="" />
                </div>
                <div className='text-5xl flex flex-col text-center'>
                    Welcome <span>Have a integrating learning about the NMCG flagship programe</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Greeting
