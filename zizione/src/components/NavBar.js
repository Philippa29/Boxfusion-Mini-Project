import React , {useState} from 'react'; 
import { HomeFilled,SearchOutlined, UserOutlined,ProfileFilled} from '@ant-design/icons';
import '../styles/NavBar.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const items = [ 
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeFilled/> 
        }, 
        {
            label: <Link to="/ticket">Ticket</Link>, 
            key: 'Ticket', 
            icon: <SearchOutlined/> 
        }, 
        {
            label:<Link to="/signin">Sign in</Link>, 
            key: 'Sign in', 
            icon: <UserOutlined/> 
        },
        {
          label:<Link to="/application">Application</Link>, 
          key: 'Application', 
          icon: <ProfileFilled /> 
      }


    ] 
    const [current , setCurrent] = useState('home'); 
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key); 
    }; 
    return(
   
    // <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}> 
    <div className="header">
<div className="logo">
<img id="logo" src="./logo-no-background.png" alt="logo" />
</div>

    <Menu mode="horizontal" items={items} style={{backgroundColor:'#EEEEEE'}}/>
</div>

    

        

     ); 
 
}

export default NavBar; 