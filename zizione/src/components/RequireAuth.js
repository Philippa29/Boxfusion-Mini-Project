// RequireAuth.js
import React from 'react';
import { useAuthState } from './Providers/auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const RequireAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { state } = useAuthState();
    console.log("state" , state);

    const authToken = window.localStorage.getItem('authToken');

    if (!authToken) {
      // Redirect to the login page or handle unauthorized access
      return <Navigate to="/signin" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default RequireAuth;




