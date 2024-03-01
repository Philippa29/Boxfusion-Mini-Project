import { createContext } from 'react';

const AuthStateContext = createContext();
const AuthActionsContext = createContext();

const initialState = {
  isAuthenticated: false,
  authToken: null,
};

export { AuthActionsContext,AuthStateContext, initialState };