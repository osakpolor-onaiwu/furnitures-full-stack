import React, { Component,useState } from 'react'
import {Link,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import LoginAction from '../../redux/actions/loginAction'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

 const Login = (props) => {
    const iniState={
        username:'',
        password:''
    }

    const [state,setState]=useState(iniState)

    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state)
        props.LoginAction(state)
        if (!props.isAuthenticated){
            document.getElementById('message').innerHTML=props.error
          }
       
    }
    if (props.isAuthenticated){
        return<Redirect to='/'/>
        }
    
    return (
        <main>
            <Navbar/>
        <div className='authform'>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input required={true} type="text" name='username' onChange={handleChange} placeholder='Enter your username'/>
                <label htmlFor="password">Password</label>
                <input required={true} type="password" placeholder='Enter your password' name="password" id="password" onChange={handleChange}/>
                <p id='message'></p>
                <button type="submit">Submit</button>
                <p>Don't have an Account?</p>
                <button type='button'><Link className='butlink' to='/signUP'>SignUp</Link></button>
            </form>
        </div>
        <Footer/>
        </main>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
      isAuthenticated:state.auth.isAuthenticated,
      error:state.auth.authError
    }
  }

const mapDispatchToProps =(dispatch)=>{
    return{
        LoginAction:(userDetails)=>{dispatch(LoginAction(userDetails))}
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
