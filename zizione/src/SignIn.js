import './SignIn.css';
import { Form,Input,Button  } from 'antd'; 
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const SignIn = () =>  {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }; 
        
  
return (<div className='body'> 
    <div class = "image">
      <img src="./logo.png" alt='logo'/>
    </div>    
      <div class = "outerbox">
            <div class = "signin">
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
                 <Input id='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
                />

                </Form.Item>
                <Form.Item>
                <Button id='button' type="primary" htmlType="submit" className="login-form-button">
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
