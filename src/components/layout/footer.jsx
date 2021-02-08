import React,{useState} from 'react'
import {connect} from 'react-redux'
import FeedAction from '../../redux/actions/feedAction'


class Footer extends React.Component {
   State={
    firstName:'',
    lastName:'',
    FeedBack:''
   }
   
   handleChange=(e)=>{
       this.setState({
        ...this.state,
        [e.target.name]:e.target.value
       })
   }

   handleSubmit=(e)=>{
       e.preventDefault()
       console.log(this.state)
      this.props.FeedAction(this.state)
   }
   render(){
   return (
        <div id='footer' >
            <section id='foot'>
            <form  onSubmit={this.handleSubmit}>
                <label htmlFor="FirstName">First Name</label>
                <input required={true} type="text" name='FirstName'  onChange={this.handleChange} placeholder='First Name'/>
                <label htmlFor="LastName">Last Name</label>
                <input required={true} type="text" placeholder='Last Name' name="LastName"  onChange={this.handleChange}/>
                <label htmlFor="FeedBack">Comment</label>
                <input required={true} type="text" placeholder='Write your Comment' name="FeedBack"  onChange={this.handleChange}/>
                <p id='message'></p>
                <button type="submit">Submit</button>
            </form>
            <div></div>
            </section>
            <section>
                <span>
                <i className="fa fa-copyright" aria-hidden="true"></i> Onaiwu Osakpolor 2020
                </span>
            </section>
        </div>
    )
}
}


const mapDispatchToProps=(dispatch)=>{
    return{
        FeedAction:(feeds)=>{
            dispatch(FeedAction(feeds))
        }
    }
}

export default connect(null,mapDispatchToProps)(Footer)