import "../styles/Tickets.css"
import React, {  useState, useEffect } from 'react';
import { Input , Card} from 'antd';
import RequireAuth from './RequireAuth';



const {Search } = Input; 
const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets, setTickets] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const ticketTypeRefList = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Registration of MV' },
    { id: 3, name: 'Fitness Of Driver' },
    { id: 4, name: 'Fitness Of Vehicle' },
  ];

  const mapTicketType = (typeId) => {
    const foundType = ticketTypeRefList.find((type) => type.id === typeId);
    return foundType ? foundType.name : 'Unknown Type';
  };

  




  const onSearch = async () => {
    try {
      // Perform search-related logic here
      // Example: Fetch tickets based on the searchQuery
      const response = await fetch(`https://localhost:44311/api/services/app/Ticket/GetByNationalId?nationalId=${searchQuery}`, {
        method: 'GET',
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonresponse = await response.json();
      console.log("result", jsonresponse.result);
      setTickets(jsonresponse.result); // Update the tickets based on the search results
      setSearchPerformed(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const isValidNationalId = /^\d{13}$/.test(searchQuery);


  //   return <p>Invalid National ID</p>
  // }

  return (
    <div>
      <div id="search">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={onSearch}
        />
      </div>
      <div id="ticket-container">
        {!isValidNationalId && searchPerformed ? (
          <p>Invalid National ID</p>
        ) : (
          <>
            {searchQuery && tickets && tickets.length ? (
              tickets.map((ticket, i) => (
                <Card key={i} id="ticket" cover={<img id="drivers" alt="example" src="./car.png" />}>
                  <h1>{mapTicketType(ticket.ticketType)}</h1>
                  <p>Amount: {ticket.amount}</p>
                  <p>Points: {ticket.points}</p>
                </Card>
              ))
            ) : null}
            {searchPerformed && !tickets.length && (
              <p>No tickets available</p>
            )}
          </>
        )}
      </div>
 
        

    </div>
  );
};

export default Tickets;
   

