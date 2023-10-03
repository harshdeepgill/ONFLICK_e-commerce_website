import { Avatar, Button, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../Redux/AdminReducer/action";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

function Customers() {
  
  const { isLoading , isError ,users}= useSelector((store)=>store.adminReducer)

const dispatch=useDispatch()
  useEffect(() => {
   
    dispatch(getUsers)
  }, []);
const handleDelete=(id)=>{
  dispatch(deleteUser(id))
}
  return (
    <DIV>
    <Space size={20} direction="vertical">
      <Typography.Title level={2}>Customers</Typography.Title>
      <Table
        loading={isLoading}
        columns={[
          // {
          //   title: "Photo",
          //   dataIndex: "image",
          //   render: (link) => {
          //     return <Avatar src={link} />;
          //   },
          // },
          {
            title: "Name",
            dataIndex: "name",
          },
         
          {
            title: "Email",
            dataIndex: "id",
          },
          {
            title: "Password",
            dataIndex: "password",
          },
     
          {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
              <Space>
              
                <Button type="primary" danger ghost onClick={() => {handleDelete(record.id)}}>Delete</Button>
              </Space>
            ),
          },
        ]}
        dataSource={users}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </DIV>
  );
}
export default Customers;
const DIV=styled.div`

/* CSS for the Table component */
.ant-table {
  width: 100%;
  border: 1px solid #e8e8e8; /* Border color for the table */
}

/* CSS for table header */
.ant-table-thead th {
  font-weight: bold;
  background-color: #f0f0f0; /* Header background color */
}

/* CSS for table rows */
.ant-table-tbody > tr > td {
  padding: 12px;
  border-bottom: 1px solid #e8e8e8; /* Border color between rows */
}

/* CSS for 'Actions' column */
.ant-table-tbody > tr > td:last-child {
  text-align: center;
}

/* CSS for button inside the 'Actions' column */
.ant-table-tbody > tr > td:last-child .ant-btn {
  margin-right: 8px; /* Adjust margin between buttons */
}

/* CSS for hover effect on rows */
.ant-table-tbody > tr:hover {
  background-color: #f9f9f9; /* Hover background color for rows */
}

`