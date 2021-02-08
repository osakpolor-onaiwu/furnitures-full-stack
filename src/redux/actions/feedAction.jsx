 import axios from 'axios'

 
 const FeedAction = (feeds) => {
    return (dispatch)=>{
        //headers
        const config={
            headers:{
                "Content-Type":"application/json"
            }
        }
    
        //Request body
        const body=JSON.stringify(feeds)
    
        axios.post("http://localhost:8000/furnitures/FeedBack/",body,config)
        .then(res=>{
            dispatch({
                type:"FEED_SUCCESS",
                response:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:"FEED_ERROR",
                err:err.response.data
            })
        })
     };
}

export default FeedAction