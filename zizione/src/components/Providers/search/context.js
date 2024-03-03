import {createContext } from 'react';

const InitialState = { 
    isInProgress: false,
    isSuccess: false,
    isError: false,
    searchQuery: '',
    tickets: [],
}

const SearchStateContext = createContext();
const SearchActionContext = createContext();

export { SearchStateContext, SearchActionContext, InitialState };
