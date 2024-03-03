//actions for search
import { createAction } from 'redux-actions';

//getSearch needs to change isinprogress to true and searchQuery to the searchQuery

export const getSearch = createAction(
    'GET_SEARCH',
    (searchQuery) => ({ searchQuery })
);
export const getSearchSuccess = createAction(
    'GET_SEARCH_SUCCESS',
    (searchQuery, result) => ({ searchQuery, result })
);

export const getSearchError = createAction(
    'GET_SEARCH_ERROR',
    (searchQuery, error) => ({ searchQuery, error })
);

