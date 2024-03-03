import "../styles/Tickets.css"
import React, { useState, useEffect } from 'react';
import { Input, Card, message } from 'antd';
import LoadingSpinner from './Loading';
import { SearchStateContext, SearchActionContext } from './Providers/search/context';
import { useContext } from 'react';


const { Search } = Input;

const Tickets = () => {
  const { state } = useContext(SearchStateContext);
  const { onSearch } = useContext(SearchActionContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isValidNationalId, setIsValidNationalId] = useState(false);



  const ticketTypeRefList = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Registration of MV' },
    { id: 3, name: 'Fitness Of Driver' },
    { id: 4, name: 'Fitness Of Vehicle' },
  ];
  //const isValidNationalId ; 
  const handleSearch = async (searchQuery) => {
    try {
      await onSearch( searchQuery);
      message.success('Search performed');
      setIsValidNationalId(/^\d{13}$/.test(searchQuery)); 
      //console.log('isValidID: ',isValidNationalId)
      // console.log('SearchQuery:', state?.searchQuery);
      // console.log('Tickets:', state?.tickets);
      // console.log('Tickets Length:', state?.tickets?.length);
      // console.log('Search Performed:', state?.searchPerformed);
    } catch (error) {
      window.location.href = '/Fetcherror';
    }
  };

  const mapTicketType = (typeId) => {
    const foundType = ticketTypeRefList.find((type) => type.id === typeId);
    return foundType ? foundType.name : 'Unknown Type';
  };

    //console.log('in ticket', state.tickets)
    useEffect(() => {
      console.log('State changed:', state);
    }, [state]);
    
 
  //console.log(state)
  return (
    <div>
      <div id="search">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={(query) => handleSearch(query)}
          
        />
      </div>

      <div id="ticket-container">
      {/* {first case: if its not a  valid id } */}
  {!isValidNationalId && state?.isSuccess ? (
    < p>Invalid National ID</p>
  ) : (
          <>
            {/* while we wait for the async  */}
            {state?.isInProgress ? (
            <LoadingSpinner />
        ) : (
        <>
        {/* check if the query has been performed and we recevied the array of tickets if not null */}
            {state?.searchQuery && state?.tickets ? (
              // check if the tickets are available
            state.tickets.length > 0 && state?.isSuccess ? (
            state.tickets.map((ticket, i) => (
                <Card key={i} id="ticket" cover={<img id="drivers" alt="example" src="./car.png" />}>
                  <h1>{mapTicketType(ticket.ticketType)}</h1>
                  <p>Amount: {ticket.amount}</p>
                  <p>Points: {ticket.points}</p>
                </Card>
              ))
            ) : (
              // Display this message when there are no tickets available
              <p>No tickets available</p>
            )
          ) : null}
        </>
      )}
    </>
  )}
</div>
    </div>
  );
};

export default Tickets;

   

