import '../styles/SignIn.css';
import { Form,Input,Button  } from 'antd'; 
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
//import { AuthContext, AuthProvider , initialState, AuthReducer} from '../AuthProvider';
//import { useContext, useReducer } from 'react';


const SignIn = () =>  {


const user = require('../auth.json')
    const [username , setUsername] = useState(''); 
    const [password, setPassword ] = useState(''); 
    
     const onFinish = () => {
        
        
        if(user[1].username === username && user[1].password === password)
        {
           localStorage.setItem("access", true); 
           console.log("access: ",localStorage.getItem("access"))
        }
        else
        {
            localStorage.setItem("access", false);
            console.log("access: ",localStorage.getItem("access"))
        }
         
        
     }; 
    

  
return (<div className='body'> 
    <div className = "image">
      <img src="./logo-no-background.png" alt='logo'/>
    </div>    
      <div className = "outerbox">
            <div className = "signin">
                <h1>Sign in </h1>
                <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                >
                <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
                    >
                 <Input id='email' prefix={<UserOutlined className="site-form-item-icon" />} 
                 placeholder="Email" 
                 onChange={(e) => setUsername(e.target.value)}/>
                </Form.Item>

                <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}>
                    <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />

                </Form.Item>
                <Form.Item>
                <Button onClick={onFinish} id='button' type="primary" htmlType="submit" className="login-form-button">
                Sign in
                </Button>
                
                </Form.Item>
                  
                </Form>
                
              
              
            
             
            </div>

      </div> 
  </div>
); 
}; 




export default SignIn; 
