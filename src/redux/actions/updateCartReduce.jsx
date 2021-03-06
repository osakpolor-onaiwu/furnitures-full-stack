import axios from 'axios'
import TokenConfig from './tokenConfig'

const UpdateCartReduce=(id,payload)=>{
    console.log(payload)
    return(dispatch,getState)=>{
        
        axios.put(`http://localhost:8000/furnitures/cart/${id}/`,payload,TokenConfig(getState))
        .then(res=>{
            axios.get('http://localhost:8000/furnitures/cartget/',TokenConfig(getState))
            .then(res=>{
                console.log(res.data)
                dispatch({
                    type:'UPDATE_CART_REDUCE',
                    payload:res.data
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
}
}

export default UpdateCartReduce