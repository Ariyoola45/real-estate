import React from 'react'
import House1 from '../../assets/house1.jpg'
import House2 from '../../assets/bed1.jpg'
import House3 from '../../assets/bed2.jpg'
import House4 from '../../assets/bed3.jpg'
import House5 from '../../assets/bed4.jpg'

import House6 from '../../assets/house2.jpg'
import House7 from '../../assets/bath1.jpg'
import House8 from '../../assets/bath2.jpg'
import House9 from '../../assets/kitchen.jpg'
import House from '../../assets/living-room.jpg'



import './Featured.css'


const Featured = () => {
    return (
        <div className='featured'>
            <h1 className="featured-text">Top featured listings </h1>
            <p className="featured-text">Selected listing by  City , State & Zip based on views  </p>
            <div className="container">
                <img className='span3 img-grid2' src={House1} alt="" />
                <img src={House2} alt="" />
                <img src={House3} alt="" />
                <img src={House4} alt="" />
                <img src={House5} alt="" />
                <div className="span3 img-details">
                    <div className="top">
                        <h2>123, acee st, Dallas, tx</h2>
                        <p>House for sales </p>
                        <p className="price">$2,555,000</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Bedroom
                                </p><p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Bathroom
                                </p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Square Feet
                                </p><p>8,000</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Est Payment
                                </p><p>$14,787</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="span2 right-imgd">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus ut fugit, natus eveniet ducimus ullam corrupti necessitatibus accusamus consequuntur possimus,
                    eligendi nulla debitis, placeat consequatur ab officiis veritatis illo.</p>
                    <button className="btn">View listing</button>
                </div>
            </div>
            <div className="container">
               
                <img className='order-2' src={House7} alt="" />
                <img className='order-3'src={House8} alt="" />
                
                <img className='span3 img-grid2 order-1' src={House6} alt="" />

                <img className='order-4'src={House9} alt="" />
                <img className='order-5'src={House} alt="" />

                <div className="span2 right-imgd order-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus ut fugit, natus eveniet ducimus ullam corrupti necessitatibus accusamus consequuntur possimus,
                    eligendi nulla debitis, placeat consequatur ab officiis veritatis illo.</p>
                    <button className="btn">View listing</button>
                </div>

                <div className="span3 img-details order-6">
                    <div className="top">
                        <h2>123, acee st, Dallas, tx</h2>
                        <p>House for sales </p>
                        <p className="p rice">$2,555,000</p>
                    </div>
                    <div className="info-grid">
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Bedroom
                                </p><p>5</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Bathroom
                                </p><p>7</p>
                            </div>
                        </div>
                        <div>
                            <div className="info">
                                <p className="bold">
                                    Square Feet
                                </p><p>8,000</p>
                            </div>
                            <div className="info">
                                <p className="bold">
                                    Est Payment
                                </p><p>$14,787</p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Featured
