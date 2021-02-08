import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import bars from '../../images/icon-hamburger.svg'
import close from '../../images/icon-close.svg'
import { connect } from 'react-redux'
import SignOut from '../../redux/actions/logoutAction'
import GetCart from '../../redux/actions/getCart'

 const Navbar=({isAuthenticated,Logout,user,GetCart})=>{
  
   const initState={
       show:false
   }

   const [state,setState]=useState(initState)
   const toggle=()=>{
    setState({
        show:!state.show
    })
   }


    const newUser=(
        <ul>
        <a style={{fontSize:'23px'}}href='#'>room</a>
        <li className='link1'><NavLink className='navlink' to='/'>home</NavLink></li>
        <li><NavLink className='navlink' to='/signUP'>SignUp</NavLink></li>
        <li><NavLink className='navlink' to='/login'>Login</NavLink></li>
        <li><NavLink className='navlink' to='/#'>Categories</NavLink></li>
        </ul>
    )

    const existingUser=(
        <ul>
        <a style={{fontSize:'23px'}}href='#'>room</a>
        <li className='link1'><NavLink className='navlink' to='/'>home</NavLink></li>
        <li><NavLink className='navlink' to='/#'>Categories</NavLink></li>
        <li onClick={Logout}><NavLink className='navlink' to='/'>Logout</NavLink></li>
        <li><NavLink className='navlink' onClick={GetCart()} to='/cart'>cart</NavLink></li>
        <li><NavLink className='navlink' to='/profile'>Profile</NavLink></li>
        </ul>
    )

    const newUser2=(
        <ul id='modM'>
        <li className='linka' onClick={toggle}><img src={close} alt='close'/></li>
        <li><NavLink className='navli' to='/'>home</NavLink></li>
        <li><NavLink className='navli' to='/signUP'>SignUp</NavLink></li>
        <li><NavLink className='navli' to='/login'>Login</NavLink></li>
        </ul>
    )

    const existingUser2=(
        <ul id="modM">
        <li className='linka' onClick={toggle}><img src={close} alt='close'/></li>
        <li><NavLink className='navli' to='/'>home</NavLink></li>
        <li onClick={Logout}><NavLink className='navli' to='/'>Logout</NavLink></li>
        <li><NavLink className='navlink' to='/profile'>Profile</NavLink></li>
        </ul>
    )



   const Modals=()=>{
    let dropdown;
    const m=(
        <div id='modParent'>
          {isAuthenticated?existingUser2:newUser2}
        </div>
       )
    const x=document.getElementById('mobile')
    if(state.show===true){
        return dropdown=m
    }
 }
    
    return (
        <div id='parentDiv' >
            <nav id='desktop'>
                  {isAuthenticated?existingUser:newUser}
            </nav>
            {Modals()}
            <nav id='mobile'>
            <ul >
                <li><img src={bars} alt="open" className='' onClick={toggle} /></li>
                <a style={{fontSize:'23px'}}href='#'>room</a>
                <li className='cart'><NavLink onClick={GetCart()} to='/cart'>cart</NavLink></li>
            </ul>
            </nav>
        </div>
    )
}
const mapStateToProps=(state)=>{
    console.log(state.auth.user)
    return{
        isAuthenticated:state.auth.isAuthenticated,
        user:state.auth.user
    }
}
const mapDispatchToProps=(dispatch)=>({
    Logout:()=>{dispatch(SignOut())},
    GetCart:()=>{dispatch(GetCart())}
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)