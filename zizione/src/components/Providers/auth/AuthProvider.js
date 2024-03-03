import React, { useReducer, useContext } from "react";
import authReducer from "./reducer";
import { initialState } from "./context";
import { AuthActionsContext,AuthStateContext } from "./context";




const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    


   

      const login = async (credentials) => {

        console.log("credentials: ", credentials);
            try {
                //console.log(credentials); 
                const response = await fetch('https://localhost:44311/api/TokenAuth/Authenticate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json-patch+json',
                    },
                    body: JSON.stringify({ ...credentials }),
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
    
               
                 const result = await response.json();
                    console.log("result: ", result);
                localStorage.setItem('authToken', result.result.accessToken);
                window.location.href = '/application';
            } catch (error) {
              //  setError(error.message);
            }


}; 
    return (
        
      <AuthStateContext.Provider value={{ state, dispatch }}
      >
        <AuthActionsContext.Provider value={{ login }}>
        {children}
        </AuthActionsContext.Provider>
      </AuthStateContext.Provider>
    );
  };

  const useAuthState = () => {
    const context = useContext(AuthStateContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

  const useAuthActions = () => {
    const context = useContext(AuthActionsContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  
  export { AuthProvider, useAuthState,useAuthActions };

