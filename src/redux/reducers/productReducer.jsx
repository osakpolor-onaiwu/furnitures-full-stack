const initialState = {
  product:[]
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
            
        case "GET_PRODUCT":
            console.log(action.response)
            return{
                ...state,
              product:action.response
            }
        case 'GET_PRODUCT_ERROR':
            console.log(action.err)
            return{
                ...state
            }

        default:
            return state
    }
};
export default ProductReducer;
