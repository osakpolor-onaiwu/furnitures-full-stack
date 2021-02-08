import axios from 'axios'
const CategoryProductAction = () => {
   return (dispatch) => {
    axios.get('http://localhost:8000/furnitures/products')
    .then((response)=>{
        dispatch({
            type:"GET_PRODUCT",
            response:response.data
        })
    }).catch(err=>{
        dispatch({type:'GET_PRODUCT_ERROR',err})
    })
        
 }
}

export default CategoryProductAction
