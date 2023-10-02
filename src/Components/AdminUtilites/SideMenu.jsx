// import {
//   AppstoreOutlined,
//   ShopOutlined,
//   ShoppingCartOutlined,
//   UserOutlined,
//   BiLogOut
// } from "@ant-design/icons";
// import { Menu } from "antd";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function SideMenu() {
//   const location = useLocation();
//   const [selectedKeys, setSelectedKeys] = useState("/admin");

//   useEffect(() => {
//     const pathName = location.pathname;
//     setSelectedKeys(pathName);
//   }, [location.pathname]);

//   const navigate = useNavigate();
//   return (
//     <DIV >
//       <div className="SideMenu">
//       <Menu
//         className="SideMenuVertical"
//         mode="vertical"
//         onClick={(item) => {
//           //item.key
//           navigate(item.key);
//         }}
//         selectedKeys={[selectedKeys]}
//         items={[
//           {
//             label: "Dashbaord",
//             icon: <AppstoreOutlined />,
//             key: "/admin",
//           },
//           {
//             label: "Inventory",
//             key: "/admin/inventory",
//             icon: <ShopOutlined />,
//           },
//           {
//             label: "Orders",
//             key: "/admin/orders",
//             icon: <ShoppingCartOutlined />,
//           },
//           {
//             label: "Customers",
//             key: "/admin/customers",
//             icon: <UserOutlined />,
//           },
//           {
//             label: "Logout",
//             key: "/admin/customers",
//             icon: <BiLogOut/>,
//           },
//         ]}
//       ></Menu>
//       </div>
//     </DIV>
//   );
// }
// export default SideMenu;

// const DIV  = styled.div`
// height: 100vh;
// .SideMenu{

//   border: 2px solid red;
//     width: 210px;
//     color:white;
//     background-color: black;
//     overflow-y:hidden;
//     overflow-x:hidden;

  
// }

// `


import React, { useState } from 'react';
import {
  AppstoreOutlined,
  LoginOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {  Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';


export default function SideMenu({collapsed }){
  const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/admin");
  
    useEffect(() => {
      const pathName = location.pathname;
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
  const navigate = useNavigate();
  return (
    <DIV >
  

  
      <Menu
           theme="dark"
           mode="inline"
          defaultSelectedKeys={['1']}
        inlineCollapsed={collapsed}
        onClick={(item) => {
                    //item.key
                    navigate(item.key);
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
                      key: "/admin",
                    },
                    {
                      label: "Inventory",
                      key: "/admin/inventory",
                      icon: <ShopOutlined />,
                    },
                    {
                      label: "Orders",
                      key: "/admin/orders",
                      icon: <ShoppingCartOutlined />,
                    },
                    {
                      label: "Customers",
                      key: "/admin/customers",
                      icon: <UserOutlined />,
                    },
                    {
                      label: "Logout",
                      // key: "",
                      icon: <LoginOutlined/>,
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