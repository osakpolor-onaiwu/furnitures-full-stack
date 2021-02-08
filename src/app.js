import React,{useEffect} from 'react'
import Main from './components/main'
import SignUp from './components/auth/signUP'
import Login from './components/auth/login'
import {HashRouter,Route,Switch} from 'react-router-dom';
import CategoryAction from './redux/actions/CategoryAction'
import {connect} from 'react-redux'
import loadUser from './redux/actions/userAction'
import Products from './components/pages/products'
import Office from './components/pages/office'
import Sofa from './components/pages/sofa'
import Kitchen from './components/pages/kitchen'
import Dinning from './components/pages/dinning'
import TvStand from './components/pages/tvStand'
import Beds from './components/pages/beds'
import CategoryProductAction from './redux/actions/catProdAction'
import LoginAction from './redux/actions/loginAction'
import GetCart from './redux/actions/getCart'
import ProductDetails from './components/pages/productsDetail'
import CartDisplay from './components/cart/cartDisplay'
import Footer from './components/layout/footer'
import Profile from './components/profile/profile'

class App extends React.Component{
  
   

    componentDidMount(){
        this.props.CategoryAction()
        this.props.GetCart()
        this.props.loadUser()
        this.props.CatProd()
    }

    componentWillMount(){
        const userData=JSON.parse(localStorage.getItem('user'))
        console.log(userData)
        this.props.LoginAction(userData)
       }
       
    render(){
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/signUP' component={SignUp}/>
                <Route exact path='/login' component={Login}/>
                <Route path='/cart' component={CartDisplay} />
                <Route path='/categories/:Products' component={Products}/>
                <Route path='/category/Sofa' component={Sofa}/>
                <Route path='/category/Beds' component={Beds}/>
                <Route path='/category/dinning sets' component={Dinning}/>
                <Route path='/category/Tv Stands' component={TvStand}/>
                <Route path='/category/Office furnitures' component={Office}/>
                <Route path='/category/Kitchen' component={Kitchen}/>
                <Route exact path='/productDetail/:productDetail' component={ProductDetails}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
        </HashRouter>
    )
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        CategoryAction:()=>{dispatch(CategoryAction())},
        loadUser:()=>{dispatch(loadUser())},
        CatProd:()=>{dispatch(CategoryProductAction())},
        GetCart:()=>{dispatch(GetCart())},
        LoginAction:()=>{dispatch(LoginAction())}
    }
}
export default connect(null,mapDispatchToProps)(App)