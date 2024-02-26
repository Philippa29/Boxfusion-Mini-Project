import React , {useState} from 'react'; 
import { HomeFilled,SearchOutlined, UserOutlined} from '@ant-design/icons';
import '../styles/NavBar.css'
import { Menu } from 'antd';

const NavBar = () => {
    const items = [ 
        {
            label: 'Home',
            key: 'home',
            icon: <HomeFilled/> 
        }, 
        {
            label: 'Ticket', 
            key: 'Ticket', 
            icon: <SearchOutlined/> 
        }, 
        {
            label: 'Sign in', 
            key: 'Sign in', 
            icon: <UserOutlined/> 
        }


    ] 
    const [current , setCurrent] = useState('home'); 
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key); 
    }; 
    return(
        
        <div className="header">
  <div className="logo">
    <img id="logo" src="./logo-no-background.png" alt="logo" />
  </div>
  <div className="nav">
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      {items.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  </div>
</div>
     ); 
 
}

export default NavBar; 