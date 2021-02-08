import React, { Component } from 'react'
import Slide1 from '../components/slide1'
import Slide2 from '../components/slide2'
import Slide3 from '../components/slide3'
import Footer from './layout/footer'
import Categories from './categories'

export default class Main extends Component {

    state={
        show:'slide1'
    }

    moveright=(slide)=>{
        if(slide==='slide2'){
            this.setState({
                ...this.state,
                show:'slide2'
            })
          
        } if(slide==='slide3'){
            this.setState({
                ...this.state,
                show:'slide3'
            })
          
        }else if(slide==='slide1'){
            this.setState({
                ...this.state,
                show:'slide1'
            })
        }
    }


    moveleft=(slide)=>{
        if(slide==='slide2'){
            this.setState({
                ...this.state,
                show:'slide2'
            })
          
        } if(slide==='slide3'){
            this.setState({
                ...this.state,
                show:'slide3'
            })
          
        }else if(slide==='slide1'){
            this.setState({
                ...this.state,
                show:'slide1'
            })
        }
    }

    render() {
        let topSection;
        switch (this.state.show) {
            case 'slide1':
                topSection=<Slide1 moveright={this.moveright} moveleft={this.moveleft} />
                break;
            case 'slide2':
                topSection=<Slide2 moveright={this.moveright} moveleft={this.moveleft} />
                break;
            case 'slide3':
                topSection=  <Slide3 moveright={this.moveright} moveleft={this.moveleft}/>
        
            default:
                break;
        }
        return (
            <div>
               {topSection}

                <section id='categories'>
                    <Categories/>
                </section>
                <section id='section2'>
                    <div className='C'></div>
                    <div className='D'>
                        <h4>ABOUT OUR FURNITURE</h4>
                        <p>         
                        Our multifunctional collection blends design and function
                        to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that
                        best express your interests and what
                        inspires you. Find the furniture pieces you need,
                        from traditional to contemporary styles
                        or anything in between. Product specialists are 
                        available to help you create your dream space.
                        </p>
                    </div>
                    <div className='E'></div>
                </section>
                <Footer/>
            </div>
        )
    }
}

