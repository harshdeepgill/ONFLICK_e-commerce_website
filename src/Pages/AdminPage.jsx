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
  import {  Button, Layout, Menu,  theme } from 'antd';
import AdminNavbar from '../Components/AdminUtilites/AdminNavbar';
  const { Header, Sider, Content } = Layout;




const AdminPage = () => {

    //const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const handleHamburgerClick = () => {
    //   setIsSidebarOpen(!isSidebarOpen);
    // };

    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
    const handleHamburgerClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout>
        <Header style={{padding: 0,background: colorBgContainer,}} >
          <AdminNavbar handleHamburgerClick={handleHamburgerClick} collapsed={collapsed}/>
        </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <SideMenu isOpen={collapsed} />
      </Sider>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
       <PageContent />
        </Content>
      </Layout>
    </Layout>
)
}

export default AdminPage

// const DIV = styled.div`
//   .SideMenuAndPageContent{
//       display:flex;
//       .PageContent{
//         margin: 20px;
//     }
//   }

  
//   `
//   {/* <AdminNavbar onHamburgerClick={handleHamburgerClick} isOpen={isSidebarOpen}/>
//   <div className="SideMenuAndPageContent">
//       <SideMenu isOpen={isSidebarOpen} />
//       <PageContent />
//   </div> */}