import '../styles/Application.css'

import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {Form,Input,Radio,Upload , Button} from 'antd';
import RequireAuth from './RequireAuth';
import { useState } from 'react';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const Application = () => {
  const [eyeTestFileList, setEyeTestFileList] = useState([]);
  const [idFileList, setIdFileList] = useState([]);

  const beforeUpload = (file, type) => {
    // Check if there is already a file uploaded
    const fileList = type === 'eyeTest' ? eyeTestFileList : idFileList;
    if (fileList.length > 0) {
      //message.error('Only one upload allowed');
      return false;
    }
    return true;
  };

  const handleChange = (info, type) => {
    // Handle file change
    let fileList = [...info.fileList];

    // Only keep the latest uploaded file
    fileList = fileList.slice(-1);

    // Update the state based on the type of upload
    if (type === 'eyeTest') {
      setEyeTestFileList(fileList);
    } else {
      setIdFileList(fileList);
    }
  };



  return (
    <div id = "application">
      <h1>Application: </h1>
      <Form.Item label="Type: ">
        <Radio.Group>
          <Radio value="motor">Moterbike</Radio>
          <Radio value="8">Code 8</Radio>
          <Radio value="10">Code 10</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="First Name: ">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name: ">
        <Input />
      </Form.Item>
      <Form.Item label="ID Number">
        <Input />
      </Form.Item>
      <Form.Item label="Address">
        <Input />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload
          
          beforeUpload={(file) => beforeUpload(file, 'eyeTest')}
          onChange={(info) => handleChange(info, 'eyeTest')}
          fileList={eyeTestFileList}
          listType="picture-card"
          onRemove={() => setEyeTestFileList([])}
        >
          {eyeTestFileList.length === 0 && (
            <div>
              <PlusOutlined />
              <div>Eye Test</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload
          
          beforeUpload={(file) => beforeUpload(file, 'id')}
          onChange={(info) => handleChange(info, 'id')}
          fileList={idFileList}
          listType="picture-card"
          onRemove={() => setIdFileList([])}
        >
          {idFileList.length === 0 && (
            <div>
              <PlusOutlined />
              <div>ID</div>
            </div>
          )}
        </Upload>
      </Form.Item>
      <Button id='button' type="primary" htmlType="submit" className="login-form-button">
        Submit
      </Button>
    </div>
  );
};


export default RequireAuth(Application); 