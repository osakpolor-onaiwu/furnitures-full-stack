const initialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isLoading:false,
    user:[],
    authError:[]
};

const authReducer = (state = initialState, action) => {
    console.log(state.token)
    switch(action.type){
        //from login action 
        case 'LOGIN_ERROR':{
            localStorage.removeItem('token');
            console.log(action.err)
            console.log('login error')
            return{
                ...state,
                isAuthenticated:false,
                isLoading:false,
                user:null,
                token:null,
                authError:action.err
            }
        }
 
        case 'LOGIN_SUCCESS':
            console.log('login success')
            localStorage.setItem("token",action.user.token)

            return{
                ...state,
                ...action.user,
                isAuthenticated:true,
                isLoading:false,
                authError:null
            }

        //from load user action
        case 'USER_LOADING':
            return{
                ...state,
                isLoading:true
            }
        
        case 'USER_LOADED':
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.user
            }
        case 'AUTH_ERROR':
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            console.log(action.err.message)
            return{
                ...state,
                authError:null,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false
            }

        //from signout
        case 'LOGOUT_SUCCESS':
            console.log('Logout success');
            localStorage.removeItem('token');
            localStorage.removeItem('user')
            return{
                ...state,
                token:null,
                user:null,
                isAuthenticated:false,
                isLoading:false,
                authError:null
            }

        //from signUP

        case 'SIGNUP_SUCCESS':
            console.log('signUP sucess')
            localStorage.setItem("token",action.createduser.token)
            return{
                ...state,
                user:action.createduser,
                isAuthenticated:true,
                isLoading:false,
                authError:null
            }
        case 'SIGNUP_ERROR':
            localStorage.removeItem('token');
            return{
                ...state,
                authError:action.err,
                token:null,
                user:null,
                isAuthenticated:null,
                isLoading:false
            }
        //note: action.err.message will output the error that happend

        default: return state
    }
};
export default authReducer;
//we set authError to null in the initial state because d user has not entered anything yet,
//we also set it to null when the login was successful becasue there is no error when it is successful only if it failed
