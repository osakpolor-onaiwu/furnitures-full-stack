
const initialState = {
    cart:[],
    updatedCart:[]
}

function CartReducer (state = initialState, action){
    switch (action.type) {

    case 'ADD_TO_CART':{
        const product=action.payload;
        const existingProductIndex=findProductIndex(state.cart,product.id)
        const updatedCart=existingProductIndex>=0?
            updateProductUnit(state.cart,product):[...state.cart,product]
          
            return {
            ...state,
            cart:action.payload,
            updatedCart
        }
        
    }

    case 'GET_CART':{
            return {
            ...state,
            cart:action.payload,
        }    
    }  

    case 'UPDATE_CART_ADD':{
        const product=action.payload;
        const existingProductIndex=findProductIndex(state.cart,product.id)
        const updatedCart=existingProductIndex>=0?
            updateProductUnitAdd(state.cart,product):[...state.cart,product]
            return {
            ...state,
            cart:updatedCart
        }
        

        // return [...state.cart]
    }
    case 'UPDATE_CART_REDUCE':{
        const product=action.payload;
        const existingProductIndex=findProductIndex(state.cart,product.id)
        const updatedCart=existingProductIndex>=0?
            updateProductUnitReduce(state.cart,product):[...state.cart,product]
            return {
            ...state,
            cart:updatedCart
        }
    }

    default:
        return state
    }
}

export default  CartReducer

// note that the find index works like filter,it checks the elements
// in an array and if an element matches a condition you set
// it will return the index of the element, which is alway a positive number

const findProductIndex=(cart,productId)=>{
    return cart.findIndex(p=>p.id===productId)
}

const updateProductUnit=(cart,product)=>{
    const productIndex=findProductIndex(cart,product.id)

    const updatedCart=[...cart]
    const existingProduct=updatedCart[productIndex]
    const updatedUnitProduct={
        ...existingProduct,
        units:existingProduct.units+ 1
    }
    updatedCart[productIndex]=updatedUnitProduct;
    return updatedCart
}

const updateProductUnitReduce=(cart,product)=>{
    const productIndex=findProductIndex(cart,product.id)

    const updatedCart=[...cart]
    const existingProduct=updatedCart[productIndex]
    const updatedUnitProduct={
        ...existingProduct,
        units:existingProduct.units-1,
    }
    updatedCart[productIndex]=updatedUnitProduct;
    return updatedCart
}

const updateProductUnitAdd=(cart,product)=>{
    const productIndex=findProductIndex(cart,product.id)

    const updatedCart=[...cart]
    const existingProduct=updatedCart[productIndex]
    const updatedUnitProduct={
        ...existingProduct,
        units:existingProduct.units+1,
    }
    updatedCart[productIndex]=updatedUnitProduct;
    return updatedCart
}
