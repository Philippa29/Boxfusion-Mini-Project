// actions.js
export const login = (dispatch, authToken) => {
    //console.log("authToken", authToken);
    //console.log("dispatch", dispatch);
    dispatch({ type: 'LOGIN', payload: authToken });
  };
  
  export const logout = (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
  
 