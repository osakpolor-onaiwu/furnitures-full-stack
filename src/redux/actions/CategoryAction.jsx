import axios from 'axios'
import TokenConfig from './tokenConfig'
const CategoryGet = () => {
   return (dispatch,getState) => {
    axios.get('http://localhost:8000/furnitures/category',TokenConfig(getState))
    .then((response)=>{
        dispatch({
            type:"GET_CATEGORY",
            response:response.data
        })
    }).catch(err=>{
        dispatch({type:'GET_CATEGORY_ERROR',err})
    })

 }
}

export default CategoryGet
