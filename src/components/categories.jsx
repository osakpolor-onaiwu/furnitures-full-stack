import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Categories = ({categories}) => {
    const showCategory=categories.length?(categories.map(cat=>{
        return(
        <div key={cat.id}>
            <Link className='catlink' to={`/categories/${cat.id}`}>
            <img src={cat.image} alt="catpic"/>
            <h3>{cat.name}</h3>
            </Link>
        </div>
        )
    })):(
        <div>
            <h4>loading Categories...</h4>
        </div>
    )
    return (
        <div id='categories'>
            <h3>Categories</h3>
            <div id='showCat'>
            {showCategory}
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        categories:state.category.category
    }
}


export default connect(mapStateToProps)(Categories)
