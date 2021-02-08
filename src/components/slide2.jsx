import React from 'react'
import Navbar from './layout/navbar'
import arrow from '../images/icon-arrow.svg'
import rightarrow from '../images/icon-angle-right.svg'
import leftarrow from '../images/icon-angle-left.svg'


export default function Slide2({moveleft,moveright}) {
    return (
            <section id='section1'>
                    <div id='diva' className='A2'>
                        <Navbar/>
                        <div className='ai1'>
                            <img  src={leftarrow} onClick={()=>moveleft('slide1')} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide3')} alt='right'/>
                        </div>
                    </div>
                    <div className='B'>
                        <div id='divb1' className='b1'>
                        <h1>  We are available all across the globe</h1>
                        <p>
                        With stores all over the world, it's easy for you to find 
                        furniture for your home or place of business. 
                        Locally, we’re in most major cities throughout the country. 
                        Find the branch nearest you using our 
                        store locator. Any questions? Don't hesitate to contact us today.

                        </p>
                        <h5>SHOP NOW <img src={arrow}/></h5>
                        </div>

                        <div className='b2'>
                            <img  src={leftarrow} onClick={()=>moveleft("slide1")} alt='left'/>
                             <img  src={rightarrow} onClick={()=>moveright('slide3')} alt='right'/>
                        </div>
                    </div>
                </section>
    
    )
}
