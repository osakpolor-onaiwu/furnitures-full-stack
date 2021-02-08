const initialState = {
    category:[]
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORY":
            console.log("category success",state.category)
            return{
                ...state,
                category:action.response
            }
            
        case "GET_CATEGORY_ERROR":
            console.log("error",action.err)


        default:
            return state
    }
};
export default CategoryReducer;
