import React, { useState } from 'react'
import SideMenu from '../Components/AdminUtilites/SideMenu'
import PageContent from '../Components/AdminUtilites/PageContent'
import styled from 'styled-components'



import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import AdminNavbar from '../Components/AdminUtilites/AdminNavbar';

import Dashboard from '../Components/AdminUtilites/Dashboard';
import { useNavigate } from 'react-router-dom';
import Orders from '../Components/AdminUtilites/Orders';
import Customers from '../Components/AdminUtilites/Customers';
import Inventory from '../Components/AdminUtilites/Inventory';

const { Header, Sider, Content } = Layout;




const AdminPage = () => {

  const [selectedPage, SetselectedPage] = useState("dashboard")

  const [collapsed, setCollapsed] = useState(false);
  const nav = useNavigate()
  if (selectedPage === "/") {
    nav("/")
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleHamburgerClick = () => {
    setCollapsed(!collapsed);
  };
  const handleSelector = (path) => {
    SetselectedPage(path)
  }

  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer, }} >
        <AdminNavbar handleHamburgerClick={handleHamburgerClick} collapsed={collapsed} selectedPage={selectedPage} />
      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <SideMenu isOpen={collapsed} handleSelector={handleSelector} />
        </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {selectedPage === "dashboard" && < Dashboard />}
          {selectedPage === "inventory" && <Inventory />}
          {selectedPage === "orders" && <Orders />}
          {selectedPage === "customers" && <Customers />}

        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminPage

