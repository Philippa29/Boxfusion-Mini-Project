import "../styles/Ticket.css"
import React from 'react';
import { Input } from 'antd';

const {Search } = Input; 

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Tickets = () => {
    return (<div> 
    <Search id = "search"
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    ></Search> 
    
    
    </div>)
}

export default Tickets; 