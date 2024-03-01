import '../styles/SignIn.css';
import { Form,Input,Button  } from 'antd'; 
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {  useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {useAuthActions} from './Providers/auth/AuthProvider';
import { useErrorBoundary } from 'react-error-boundary';
import FetchError from './FetchError';


const SignIn = ({setShowNavbar}) =>  {
    const authToken = localStorage.getItem('authToken');
const navigate = useNavigate();
const [credentials, setCredentials] = useState({userNameOrEmailAddress: '', password: '',rememberClient: true});
const [error, setError] = useState(null);

const {showBoundary} = useErrorBoundary();



    
    
    const { login } = useAuthActions();

  
if(error){
    return <FetchError></FetchError>
}
else
{



    




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
                      onFinish={()=>{
                        console.log('credentials', login);
                        login({...credentials}
                        )}}
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
                 onChange={(e) => setCredentials({ ...credentials, userNameOrEmailAddress: e.target.value })}/>
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
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />

                </Form.Item>
                <Form.Item>
                
                <Button onClick={ ()=> authToken? <Navigate to="/" />: login } id='button' type="primary" htmlType="submit" className="login-form-button">
                Sign in
                </Button>
                
                </Form.Item>
                  
                </Form>
                
              
              
            
             
            </div>

      </div> 

    
    </div>
); 
}; 
}



export default SignIn; 
