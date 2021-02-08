import axios from 'axios'



//Login User
 const LoginAction=(userDetails)=>{
 return (dispatch)=>{
    //headers
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    }

    //Request body
  
    const body=JSON.stringify(userDetails)
    console.log(body)
    localStorage.setItem('user',body)

    axios.post("http://localhost:8000/furnitures/auth/login",body,config)
    .then(res=>{
        dispatch({
            type:"LOGIN_SUCCESS",
            user:res.data
        })
    })
    .catch(err=>{
        dispatch({
            type:"LOGIN_ERROR",
            err:err.response.data.non_field_errors
        })
    })
 };

}


export default LoginAction



