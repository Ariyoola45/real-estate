import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="content">
                <h1>Find the perfect palce </h1>
                <p className="search-text">
                    Search the target  selection  of luxury high-rise apartment, 
                    multi-family  homes, and luxury home 
                </p>
                <form action="" className='search'>
                    <div>
                        <input type="text"  placeholder='Enter keyword' />
                    </div>
                    <div className="radio">
                        <input type="radio" checked name="" id="" />
                        <label>buy</label>
                        <input type="radio" checked name="" id="" />
                        <label>Rent</label>
                        <button type="submit"><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
