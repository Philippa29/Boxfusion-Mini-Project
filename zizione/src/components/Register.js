import '../styles/Register.css';
import { Form,Input,Button  } from 'antd'; 
import { LockOutlined, UserOutlined , MailOutlined} from '@ant-design/icons';
import {  useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {useAuthActions} from './Providers/auth/AuthProvider';
import { useErrorBoundary } from 'react-error-boundary';
import FetchError from './FetchError';


const Register = () =>  {
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



    // {
    //     "userName": "string",
    //     "name": "string",
    //     "surname": "string",
    //     "emailAddress": "user@example.com",
    //     "isActive": true,
    //     "roleNames": [
    //       "string"
    //     ],
    //     "password": "string"
    //   }   




return (<div className='body'> 
    <div className = "image">
      <img src="./logo-no-background.png" alt='logo'/>
    </div>    
      <div className = "outerbox">
            <div id = "signin">
                <h1>Register</h1>
                <Form
  name="normal_register"
  className="register-form"
  initialValues={{
    remember: true,
  }}
  onFinish={() => {
    console.log('credentials', credentials);
    // Perform your registration logic here
  }}
>
  <Form.Item
    name="name"
    rules={[
      {
        required: true,
        message: 'Please input your Name!',
      },
    ]}
  >
    <Input
      id='name'
      prefix={<UserOutlined className="site-form-item-icon" />}
      placeholder="Name"
      onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
    />
  </Form.Item>

  <Form.Item
    name="surname"
    rules={[
      {
        required: true,
        message: 'Please input your Surname!',
      },
    ]}
  >
    <Input
      id='surname'
      prefix={<UserOutlined className="site-form-item-icon" />}
      placeholder="Surname"
      onChange={(e) => setCredentials({ ...credentials, surname: e.target.value })}
    />
  </Form.Item>

  <Form.Item
    name="username"
    rules={[
      {
        required: true,
        message: 'Please input your Username!',
      },
    ]}
  >
    <Input
      id='username'
      prefix={<UserOutlined className="site-form-item-icon" />}
      placeholder="Username"
      onChange={(e) => setCredentials({ ...credentials, userName: e.target.value })}
    />
  </Form.Item>

  <Form.Item
    name="email"
    rules={[
      {
        required: true,
        message: 'Please input your Email!',
      },
    ]}
  >
    <Input
      id='email'
      prefix={<MailOutlined className="site-form-item-icon" />}
      placeholder="Email"
      onChange={(e) => setCredentials({ ...credentials, emailAddress: e.target.value })}
    />
  </Form.Item>

  <Form.Item
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your Password!',
      },
    ]}
  >
    <Input
      prefix={<LockOutlined className="site-form-item-icon" />}
      type="password"
      placeholder="Password"
      onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
    />
  </Form.Item>

  <Form.Item
    name="confirmPassword"
    rules={[
      {
        required: true,
        message: 'Please confirm your Password!',
      },
    ]}
  >
    <Input
      prefix={<LockOutlined className="site-form-item-icon" />}
      type="password"
      placeholder="Confirm Password"
      onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
    />
  </Form.Item>

  <Form.Item>
    <Button
      onClick={() => authToken ? <Navigate to="/" /> : login}
      id='button'
      type="primary"
      htmlType="submit"
      className="register-form-button"
    >
      Register
    </Button>
  </Form.Item>
</Form>

                
              
              
            
             
            </div>

      </div> 

    
    </div>
); 
}; 
}



export default Register; 