import axios from 'axios'
import TokenConfig from './tokenConfig'

//check token and load user

const loadUser=()=>{
    return (dispatch,getState)=>{
        //User loading
        dispatch({type:'USER_LOADING'})


    axios.get("http://localhost:8000/furnitures/auth/user",TokenConfig(getState))
    .then(res=>{
        console.log(res)
        dispatch({type:"USER_LOADED", user:res.data})
    }).catch(err=>{
        dispatch({type:'AUTH_ERROR',err})
    })


    }
}

export default loadUser