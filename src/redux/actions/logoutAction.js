import axios from 'axios'
import TokenConfig from './tokenConfig'


//check token and load user

const SignOut=()=>{
    return (dispatch,getState)=>{
    

    axios.post("http://localhost:8000/furnitures/auth/logout",null,TokenConfig(getState))
    .then(res=>{
        dispatch({type:"LOGOUT_SUCCESS"})
    }).catch(err=>{
        dispatch({type:'AUTH_ERROR',err})
    })


    }
}

export default SignOut
