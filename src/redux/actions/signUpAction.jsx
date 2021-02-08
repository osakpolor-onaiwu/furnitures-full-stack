import axios from 'axios'
 
const signUpAction = (newUser) =>{
      return (dispatch)=>{
         //headers
         const config={
             headers:{
                 "Content-Type":"application/json"
             }
         }
     
         //Request body
         const body=JSON.stringify(newUser)
     
         axios.post("http://localhost:8000/furnitures/auth/register",body,config)
         .then(res=>{
             dispatch({
                 type:"SIGNUP_SUCCESS",
                 createduser:res.data
             })
         })
         .catch(err=>{
             dispatch({
                 type:"SIGNUP_ERROR",
                 err:err.response.data
             })
         })
      };
}

export default signUpAction;
