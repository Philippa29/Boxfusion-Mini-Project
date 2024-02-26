
import React , {useReducer , createContext } from 'react'; 

// AuthContext is an object of type createContext?
const AuthContext = createContext(); 

const initialState = {
    user: null ,
    isAuthenticated: false, 
    error: null, 
}

const ActionTypes = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS', 
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT',
}; 

const AuthReducer = (state , action) => {
    switch (action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state, 
                user:action.payload.user , 
                isAuthenticated: true, 
                error: null, 
            }; 
        case ActionTypes.LOGIN_FAILURE: 
        return {
            ...state,
            user: null, 
            isAuthenticated: false , 
            error: action.payload.error,
        }; 
        case ActionTypes.LOGOUT: 
        return{
            ...state, 
            user: null, 
            isAuthenticated: false, 
            error: null, 
        }; 
            default: 
            return state; 
    }
}

const AuthProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(AuthProvider, initialState); 

    const login = (username , password) => {
        if(username && password){
        dispatch({type: ActionTypes.LOGIN_SUCCESS, payload:{ user: {username} }})

        }
        else{
        dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: { error: 'Invalid credentials' } });
        }
    }

    const logout = () => {
        dispatch({type: ActionTypes.LOGOUT}); 
    }

    return <AuthContext.Provider values = {{state, login , logout }}>{children}</AuthContext.Provider>
}

export  { AuthContext , AuthProvider}; 