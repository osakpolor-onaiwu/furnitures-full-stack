import React from 'react'
import Navbar from './layout/navbar'
import arrow from '../images/icon-arrow.svg'
import rightarrow from '../images/icon-angle-right.svg'
import leftarrow from '../images/icon-angle-left.svg'

export default function Slide3({moveleft,moveright}) {
    return (
            <section id='section1'>
                    <div id='diva' className='A3'>
                        <Navbar/>
                        <div className='ai1'>
                            <img  src={leftarrow} onClick={()=>moveleft('slide2')} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide1')} alt='right'/>
                        </div>
                    </div>
                    <div className='B'>
                        <div id='divb1' className='b1'>
                        <h1>  Manufactured with the best materials</h1>
                        <p>
                        Our modern furniture store provide a high level of quality. 
                        Our company has invested in advanced technology 
                        to ensure that every product is made as perfect 
                        and as consistent as possible. With three decades of 
                        experience in this industry, we understand what 
                        customers want for their home and office.

                        </p>
                        <h5>SHOP NOW <img src={arrow} alt='arrow'/></h5>
                        </div>
                        <div className='b2'>
                            <img  src={leftarrow} onClick={()=>moveleft("slide2")} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright("slide1")} alt='right'/>
                        </div>
                    </div>
                </section>
    )
}
