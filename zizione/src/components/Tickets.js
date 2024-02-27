import "../styles/Tickets.css"
import React from 'react';
import { Input , Card} from 'antd';


const {Search } = Input; 

const onSearch = (value, _e, info) => console.log(info?.source, value);

// const ticket = [
//     {
//         id : '1111111111111',
//         Points: 3 ,
//         Violation: "Motor vehicle not licensed"
//     },
// ]
const Tickets = () => {
    return (
    <div>
       <div id = "search"> 
    <Search 
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    ></Search> 
    
    
    </div>
    <div>
    <Card 
        id = "learners" cover= {<img id='drivers' alt="example" src="./car.png"/>}
        >
            <h1>Motor vehicle not registered</h1>
            <p>Amount: R1000 </p>
            <p>Points: 3</p>
        
        </Card>
    </div>
     </div>)
}

export default Tickets; 