import React, { useState } from 'react';
import {
  AppstoreOutlined,
  LoginOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu, Space } from 'antd';
import styled from 'styled-components';
export default function SideMenu({ collapsed, handleSelector }) {
  const [selectedKeys, setSelectedKeys] = useState("dashboard");


  return (
    <DIV >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['2']}
        inlineCollapsed={collapsed}
        onClick={(item) => {

          handleSelector(item.key)

          setSelectedKeys(item.key)
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "",
            key: "",
          },
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "dashboard",
          },
          {
            label: "Inventory",
            key: "inventory",
            icon: <ShopOutlined />,
          },
          {
            label: "Orders",
            key: "orders",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Customers",
            key: "customers",
            icon: <UserOutlined />,
          },
          {
            label: "Logout",
            key: "/",
            icon: <LoginOutlined />,
          },
        ]}
      />
    </DIV>
  );
};
const DIV=styled.div`
  /* width: 210px; */
 height: 100vh;
`