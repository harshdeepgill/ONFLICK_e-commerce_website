


import { RiAdminLine } from 'react-icons/ri';
import Logo from "../Logo";

import styled from "styled-components";

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function AdminNavbar({ handleHamburgerClick, collapsed }) {



  return (
    <DIV className="nav">
      <div className='toggle-btn'>
        <Button onClick={handleHamburgerClick} >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Logo size={"24px"} />
      </div>
      <div className='admin'>Admin
        <RiAdminLine />
      </div>
    </DIV>
  );
}
export default AdminNavbar;
const DIV = styled.div`
  border: 0.5px solid var(--border);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color:white;
.admin{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 24px;
  font-family: var(--logo-font-family);
}
.toggle-btn{
  align-items:center;
    
  button{
    box-shadow:none;
      border: none;
      background: none;
      font-size: '16px';
              width: 64;
              height: 64;
  }
   button:focus {
      outline: 'none';
      box-shadow:none;
      border: none;
      background: none;
      }
  }

`