import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)

    
    const hamburger = ()=>{
        setClick(!click)
    }


    return (
        <div className='navbar'>
            <div className="container">
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                <button className="btn">
                    Sign in 
                </button>
            
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Search</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
               
            </ul>
            <div onClick={hamburger} className="hamburger">
               {!click ?  <HiOutlineMenuAlt4  className='icon'/>:  <FaRegTimesCircle className='icon'/>}
            </div>
            </div>
        </div>
    )
}

export default Navbar
