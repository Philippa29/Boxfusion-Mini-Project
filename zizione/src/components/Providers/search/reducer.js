import { handleActions } from 'redux-actions';
import { InitialState } from './context';
import { getSearchSuccess, getSearchError } from './action';

export const searchReducer = handleActions(
    {
        getSearch: (state, action) => ({

            ...state,
            isInProgress: true,
            searchQuery: action.payload.searchQuery,
            isSuccess: false, // Resetting isSuccess
            isError: false, // Resetting isError
            tickets: [], 
            
        }), 
        [getSearchSuccess]: (state, action) => ({
            ...state,
            isInProgress: false,
            isSuccess: true,
            searchQuery: action.payload.searchQuery,
            tickets: action.payload.result, // Assuming 'tickets' is the property you want to update
        }),
        [getSearchError]: (state, action) => ({
            ...state,
            isInProgress: false,
            isError: true,
            searchQuery: action.payload.searchQuery,
            error: action.payload.error,
            tickets: [],
        })
    },
    InitialState
);

export default searchReducer;
