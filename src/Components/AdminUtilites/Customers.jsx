import { Avatar, Button, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../../Redux/AdminReducer/action";
import { useDispatch, useSelector } from "react-redux";

function Customers() {
  
  const { isLoading , isError ,users}= useSelector((store)=>store.adminReducer)

const dispatch=useDispatch()
  useEffect(() => {
   
    dispatch(getUsers)
  }, []);
console.group(users)
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
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
          // {
          //   title: "LastName",
          //   dataIndex: "lastName",
          // },
          {
            title: "Email",
            dataIndex: "id",
          },
          {
            title: "Password",
            dataIndex: "password",
          },
          // {
          //   title: "Phone",
          //   dataIndex: "phone",
          // },

          // {
          //   title: "address",
          //   dataIndex: "address",
          //   render: (address) => {
          //     return (
          //       <span>
          //         {address.address}, {address.city}
          //       </span>
          //     );
          //   },
          // },
          {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
              <Space>
              
                <Button onClick={() => {}}>Delete</Button>
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
  );
}
export default Customers;
