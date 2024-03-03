import React, { useReducer , useContext} from 'react';
import searchReducer from './reducer';
import { InitialState } from './context';
import { SearchStateContext, SearchActionContext } from './context';
import { getSearch, getSearchSuccess, getSearchError } from './action';

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, InitialState);

  console.log('search state', state);

  const onSearch = async (searchQuery) => {
    //console.log('searchQuery', searchQuery);
    //console.log('state', state);
    dispatch(getSearch(searchQuery));
    try {
      const response = await fetch(`https://localhost:44311/api/services/app/Ticket/GetByNationalId?nationalId=${searchQuery}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      
     
      
      

      const jsonresponse = await response.json();
      console.log("result", jsonresponse.result);

      // Change state to isProgress false and isSuccess true
      dispatch({ type: "GET_SEARCH_SUCCESS", payload: { searchQuery } });
      dispatch(getSearchSuccess(searchQuery, jsonresponse.result));
      console.log(state.tickets)

    } catch (error) {
      // Change state to isProgress false and isError true
      //dispatch({ type: "GET_SEARCH_ERROR", payload: { searchQuery } });
      dispatch(getSearchError(searchQuery, error));
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SearchStateContext.Provider value={{state}}>
      <SearchActionContext.Provider value={{ onSearch }}>
        {children}
      </SearchActionContext.Provider>
    </SearchStateContext.Provider>
  );
};

// const useSearchState = () => {
//   const context = useContext(SearchStateContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// const useSearchActions = () => {
//   const context = useContext(SearchActionContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

//export default SearchProvider;
