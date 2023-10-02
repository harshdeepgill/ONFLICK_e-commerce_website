import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../Redux/AdminReducer/action";
import styled from "styled-components";


function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <DIV>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
    </DIV>
  );
}
export default Orders;
const DIV = styled.div`
  /* CSS for the Space component */
space {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start of the container */
}

/* CSS for the Typography.Title */
title {
  margin-bottom: 10px; /* Adjust margin between title and table */
}

/* CSS for the Table component */
.table {
  width: 100%;
  border: 1px solid #e8e8e8; /* Border color for the table */
}

/* CSS for table header */
.custom-table .ant-table-thead th {
  font-weight: bold;
  background-color: #f0f0f0; /* Header background color */
}

/* CSS for table rows */
.custom-table .ant-table-tbody > tr > td {
  padding: 12px;
  border-bottom: 1px solid #e8e8e8; /* Border color between rows */
}

/* CSS for hover effect on rows */
.custom-table .ant-table-tbody > tr:hover {
  background-color: #f9f9f9; /* Hover background color for rows */
}

`