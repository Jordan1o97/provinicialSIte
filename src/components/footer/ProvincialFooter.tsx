import React from 'react'
import './ProvincialFooter.scss'
import { Typography, Form, Input, Button } from 'antd';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
const { Text, Title } = Typography;

type ProvincialFooterProps = {};

const ProvincialFooter: React.FC<ProvincialFooterProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='ProvincialFooter'>
      <div className='social'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined className='social-icon' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined className='social-icon' />
        </a>
      </div>
      <Text className='footerText'>550 Queen Street, Fredericton, NB E3B 1B9 •  (506) 453-1254  •  info@theprovinciallounge.ca </Text>
      <Title level={5} className='footerTitle'>Contact Us</Title>
      <Form
        name="contact_form"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input a valid email!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: 'Please input your message!',
            },
          ]}
        >
          <Input.TextArea placeholder="Message" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProvincialFooter;
