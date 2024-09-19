import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, HomeOutlined, DashboardOutlined } from '@ant-design/icons';
import './App.css'; // Custom styles

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ color: 'white', padding: '16px', textAlign: 'center' }}>
          {collapsed ? 'K' : 'KSK Dashboard'}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout className="site-layout">
        {/* Topbar */}
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{ marginLeft: 16 }}
          />
        </Header>

        {/* Content Area */}
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          <h1>Welcome to the Dashboard</h1>
          <p>This is the content area of your dashboard.</p>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
