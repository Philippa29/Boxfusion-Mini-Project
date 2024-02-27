import {createAction} from 'redux-actions'; 

export const authActions={
    LOGIN_SUCCESS: 'LOGIN_SUCCESS', 
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGOUT'
}

export const setAuthAction = createAction(authActions.setAuthAction, (action)=> ({action})); 