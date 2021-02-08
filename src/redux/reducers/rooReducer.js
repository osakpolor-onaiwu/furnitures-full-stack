import {combineReducers} from 'redux'
import CategoryReducer from './categoryReducer'
import ProductReducer from './productReducer'
import AuthReducer from './authReducer'
import FeedReducer from './feedReducer'
import CartReducer from './cartReducer';


const RootReducer= combineReducers({
            auth:AuthReducer,
            category:CategoryReducer,
            cart:CartReducer,
            products:ProductReducer,
            feed:FeedReducer
          
        })
  

export default RootReducer