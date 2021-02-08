import axios from 'axios'
import TokenConfig from './tokenConfig'

const  AddToCartAction=(product)=>{
    
    return(dispatch,getState)=>{
        
        axios.post('http://localhost:8000/furnitures/cart/',product,TokenConfig(getState))
        .then(res=>{
            axios.get('http://localhost:8000/furnitures/cartget',TokenConfig(getState))
            .then(res=>{
                console.log(res.data)
                dispatch({
                    type:'ADD_TO_CART',
                    payload:res.data
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err.message)
        })
    }
}
export default AddToCartAction
