import '../styles/LandingPage.css'
import React from 'react'; 
import { Card } from 'antd'; 


const LandingPage = () => 
{
    return (
        <div className='overall'> 
        <div className='tab'> 
        <Card 
        id = "learners" cover= {<img id='learners' alt="example" src="./learners.png"/>}
        >
            <h1>Learners</h1>
            <p>Apply for Learners Test</p>
        
        </Card>


        </div>
        <div className='tab'> 
        <Card 
        id = "learners" cover= {<img id='drivers' alt="example" src="./car.png"/>}
        >
            <h1>Drivers</h1>
            <p>Apply for Drivers Test</p>
        
        </Card>

        </div>
        <div className='tab'> 
        <Card 
        id = "learners" cover= {<img id='renew' alt="example" src="./renew.png"/>}
        >
            <h1>Renew/Lost Drivers</h1>
            <p>Renew your license!</p>
        
        </Card>

        </div>
        </div>

    ); 

}; 

export default LandingPage