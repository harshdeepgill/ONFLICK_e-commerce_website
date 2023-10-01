import React, { useState } from 'react'
import Header from '../Components/AdminUtilites/Header'
import SideMenu from '../Components/AdminUtilites/SideMenu'
import PageContent from '../Components/AdminUtilites/PageContent'
import styled from 'styled-components'







const AdminPage = () => {
   
   
  
    return (
      <DIV>

        <Header/>
        <div className="SideMenuAndPageContent">
       <SideMenu/>
       <PageContent/>
      </div>
      </DIV>

    )
}

export default AdminPage

const DIV = styled.div`
  
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

.AppHeader{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 20px 4px 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.SideMenuAndPageContent{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, 0.05) ;
}
.SideMenu{
    height: 100%;
}
.SideMenuVertical{
    height: 100%;
}
.PageContent{
    padding-left: 12px;
}
`