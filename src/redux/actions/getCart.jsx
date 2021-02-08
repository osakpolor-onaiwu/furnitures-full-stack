import axios from 'axios'
import TokenConfig from './tokenConfig'

 const GetCart=(payload)=>{
    const existingToken=localStorage.getItem("token")
    console.log(existingToken)
    const config={
       headers:{
           "Content-Type":"application/json"
       }
   }
   if(existingToken){
       config.headers['Authorization']=`Token ${existingToken}`;
   }
    return (dispatch,getState)=>{
    axios.get('http://localhost:8000/furnitures/cartget',config)
    .then(res=>{
        console.log(res.data)
        dispatch({
            type:'GET_CART',
            payload:res.data
        })
    }).catch(err=>{
        console.log(err)
    })
}
}

export default GetCart

