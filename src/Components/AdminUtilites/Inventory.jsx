import { Avatar, Button, Input, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getInventory, updateProduct } from "../../Redux/AdminReducer/action";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    useDisclosure,
  } from '@chakra-ui/react'


  
  
  function Inventory() {
      
      const { isLoading , isError ,products}= useSelector((store)=>store.adminReducer)
      const dispatch = useDispatch()
      useEffect(() => {
          
          
          dispatch(getInventory)
        }, []);
        //   console.log(products)
        const handleDelete=(id)=>{
            dispatch(deleteProduct(id))
        }
        
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
            <Space size={15} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={isLoading}
        columns={[
          {
            title: "Image",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
        },
        {
          title: "Category",
          dataIndex: "category",
        },
          {
            title: "Description",
            dataIndex: "description",
          },
          {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
              <Space>
                <Button onClick={onOpen}>Update</Button>
                <Button onClick={() => {handleDelete(record.id)}}>Delete</Button>
              </Space>
            ),
          },

        
        ]}
        dataSource={products}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
 <Modal
       
       isOpen={isOpen}
       onClose={onClose}
     >
       <ModalOverlay />
       <ModalContent>
         <ModalHeader>Update Product</ModalHeader>
         <ModalCloseButton />
           <FormControl>
         <ModalBody>
             <FormLabel>Product Title</FormLabel>
             <Input  placeholder='Product Title' />
           
             <FormLabel>Product Image</FormLabel>
             <Input  placeholder='Product Image' type="url"/>
           
             <FormLabel>Price</FormLabel>
             <Input placeholder='Price' type="number" />
             <FormLabel>Category</FormLabel>
             <Input placeholder='Category' t />
             <FormLabel>Rating</FormLabel>
             <Input placeholder='Rating' type="number" />
             <FormLabel>Num_of_Votes</FormLabel>
             <Input placeholder='Description' type="number" />
             <FormLabel>Num_of_Votes</FormLabel>
             <Input placeholder='Description' type="number" />




         </ModalBody>

         <ModalFooter>
           <Button colorScheme='blue' mr={3}>
             Update
           </Button>
           <Button onClick={onClose}>Cancel</Button>
         </ModalFooter>
           </FormControl>
       </ModalContent>
     </Modal>

    </Space>
  );
}
export default Inventory;

/*
"id": 1,
    "title": "Wooden Dining Table",
    "price": 299.99,
    "category": "Furniture",
    "rating": 4.5,
    "numVotes": 120,
    "image": "https://firebasestorage.googleapis.com/v0/b/decisive-duck.appspot.com/o/Resources%2FProduct_api%2FWooden%20Dining%20Table.jpg?alt=media&token=0b4d7e7f-ca3c-4a2f-a858-c37a6113c653",
    "description": "Elegant dining table for family meals." */