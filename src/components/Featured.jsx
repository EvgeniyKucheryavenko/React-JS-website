import React, {useState,useEffect} from "react";

import './Featured.css';
import BTC from '../assets/btc-img.png';
import {FiArrowUpRight} from 'react-icons/fi';
import axios from "axios";

const Featured = () => {

    const [data,setData]=useState(null)

    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false\n'

    useEffect(()=> {
        axios.get(URL).then((response)=> {
            setData(response.data)
        }). catch(error=> {
            console.log(error)
        })
    }, [])


    return (
        <div className="featured">
            <div className="container">
                {/*{LEFT}*/}
                <div className="left">
                    <h2>Explorer top Crypto's Like Bitcoin> Ethereum, and Dogecoin </h2>
                <p>Sell al available assets: Cryptocurrencies and NFT'sy</p>
                <button className="btn">See More Coins</button>
                </div>
            </div>
            <div className="right">
                <div className="top">
                    <img src={BTC} alt="BTC img"/>
                </div>
                <div>
                    <h5>Bitcoin</h5>
                    <p>$49,000</p>
                </div>
                <span><FiArrowUpRight/>2.5%</span>

            </div>
        </div>
    );
};

export default Featured;