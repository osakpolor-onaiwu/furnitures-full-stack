import axios from 'axios'
import TokenConfig from './tokenConfig'

const  ProfileAction=(profile)=>{
    
    return(dispatch,getState)=>{
        
        axios.post('http://localhost:8000/furnitures/profile/',profile,TokenConfig(getState))
        .then(res=>{
            axios.get('http://localhost:8000/furnitures/profileget',TokenConfig(getState))
            .then(res=>{
                console.log(res.data)
                dispatch({
                    type:'PROFILE',
                    payload:res.data
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err.message)
        })
    }
}
export default ProfileAction
