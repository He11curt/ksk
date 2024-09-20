import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, Card, Typography, Row, Col } from 'antd';
import './Login.css';

const { Title } = Typography;

const predefinedUsername = 'admin';
const predefinedPassword = 'password123';

function Login({ setIsLoggedIn }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Function to handle login
  const handleLogin = () => {
    const { username, password } = form;
    if (username === predefinedUsername && password === predefinedPassword) {
      setIsLoggedIn(true);
      navigate('/'); // Redirect to home after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', minWidth: '80vw' }}>
      <Col xs={24} sm={12} md={8}>
        <Card style={{ padding: '20px' }} bordered={false} className="login-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          
          <Title level={2} style={{ textAlign: 'center', color: '#ffffff', margin: 0 }}><img src="/home/morphle/Desktop/Bharath/HospitalManagement/ksk/src/assets/ksk.png" alt="Logo" /></Title>
        </div>

          <Form layout="vertical">
            <Form.Item label="Username">
              <Input
                name="username"
                value={form.username}
                onChange={handleInputChange}
                placeholder="Enter username"
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                name="password"
                value={form.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleLogin} block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
