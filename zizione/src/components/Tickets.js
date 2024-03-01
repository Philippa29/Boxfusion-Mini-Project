import "../styles/Tickets.css"
import React, {  useState, useEffect } from 'react';
import { Input , Card} from 'antd';



const {Search } = Input; 
const Tickets = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets, setTickets] = useState([]);

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

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://localhost:44311/api/Ticket/Get', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setTickets(result); // Assuming the API response is an array of tickets
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch tickets on component mount
    fetchTickets();
  }, []);

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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
        {tickets.map((ticket, i) => (
          
          <Card key={i} id="ticket" cover={<img id="drivers" alt="example" src="./car.png" />}>
            <h1>{mapTicketType(ticket.ticketType)}</h1>
            <p>Amount: {ticket.amount}</p>
            <p>Points: {ticket.points}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
   

