import React, {useState} from 'react';
import './Hero.css';
import Crypto from '../assets/hero-img.png';

const Hero = () => {
    const [value, setValue]=useState('')
    const inputValue = event => {
        event.preventDefault();
        setValue(event.target.value)

    }
    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell and store hundreds of cryptocurrencies</p>
                    <div className="input-container">
                        <input
                            value={value}
                            onChange={inputValue}
                            type="email" placeholder="Enter your email"/>
                        <button className="btn">Learn More</button>
                    </div>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img className="heroImg" src={Crypto} alt="images"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;