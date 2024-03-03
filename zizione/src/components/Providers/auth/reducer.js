const initialState = {
    isAuthenticated: false,
    authToken: null,
  };

    const authReducer = (state, action) => {
        console.log("action", action);
        console.log("state", state);
        switch (action.type) {
          case 'LOGIN':
            return {
              isAuthenticated: true,
              authToken: action.payload,
            };
          case 'LOGOUT':
            return {
              isAuthenticated: false,
              authToken: null,
            };
          default:
            return state;
        }
};

export default authReducer;