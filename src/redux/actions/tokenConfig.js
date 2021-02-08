
const TokenConfig = (getState) =>{
    //get token from state
    const token=getState().auth.token
    

     //headers
     const config={
        headers:{
            "Content-Type":"application/json"
        }
    }
    if(token){
        config.headers['Authorization']=`Token ${token}`;
    }

    return config;
}




export  default TokenConfig
