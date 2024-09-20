import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login after logging out
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Home Page!</h1>
      <Button type="primary" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default Home;
