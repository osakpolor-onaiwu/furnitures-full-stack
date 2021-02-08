import React from 'react'
import ReactDOM from 'react-dom'
import App  from './app'
import './main.css'
import 'font-awesome/css/font-awesome.min.css'
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootReducer from './redux/reducers/rooReducer'

const store=createStore(RootReducer,applyMiddleware(thunk.withExtraArgument()))

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'))





