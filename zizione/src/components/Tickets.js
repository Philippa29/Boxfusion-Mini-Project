import "../styles/Tickets.css"
import React, { useState, useEffect } from 'react';
import { Input, Card } from 'antd';
import LoadingSpinner from './Loading';
import { SearchStateContext, SearchActionContext } from './Providers/search/context';
import { useContext } from 'react';

const { Search } = Input;

const Tickets = () => {
  const { state } = useContext(SearchStateContext);
  const { onSearch } = useContext(SearchActionContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [tickets, setTickets] = useState([]);



  const ticketTypeRefList = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Registration of MV' },
    { id: 3, name: 'Fitness Of Driver' },
    { id: 4, name: 'Fitness Of Vehicle' },
  ];

  const handleSearch = async (searchQuery) => {
    try {
      await onSearch( searchQuery);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const mapTicketType = (typeId) => {
    const foundType = ticketTypeRefList.find((type) => type.id === typeId);
    return foundType ? foundType.name : 'Unknown Type';
  };

    console.log('in ticket', state)

  const isValidNationalId = /^\d{13}$/.test(searchQuery);
  
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
          onSearch={() => handleSearch(searchQuery)}
        />
      </div>
      <div id="ticket-container">
        {!isValidNationalId && state?.isInProgress ? (
          <p>Invalid National ID</p>
        ) : (
          <>
            {state?.isInProgress ? (
              <LoadingSpinner />
            ) : (
              <>
                {state?.searchQuery && state?.tickets && state?.tickets.length ? (
                  state.tickets.map((ticket, i) => (
                    <Card key={i} id="ticket" cover={<img id="drivers" alt="example" src="./car.png" />}>
                      <h1>{mapTicketType(ticket.ticketType)}</h1>
                      <p>Amount: {ticket.amount}</p>
                      <p>Points: {ticket.points}</p>
                    </Card>
                  ))
                ) : null}
                {state?.searchPerformed && !state?.tickets?.length && (
                  <p>No tickets available</p>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Tickets;

   

