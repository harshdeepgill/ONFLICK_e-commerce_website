import { Avatar, Button, Image, Input, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, getInventory, getSingleProduct, updateProduct, updatedSingleProduct } from "../../Redux/AdminReducer/action";
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
    Box,
    Circle,
    Flex,
    useToast,
} from '@chakra-ui/react'
import styled from "@emotion/styled";

const initialProduct = {
    title: "",
    price: 0,
    category: "",
    rating: 0,
    numVotes: 0,
    description: "",
    image: "",
}



function Inventory() {
    const [product, setProduct] = useState(initialProduct)
    const { isLoading, isError, products } = useSelector((store) => store.adminReducer)
    const dispatch = useDispatch()
    const toast = useToast()
    const { isOpen: isUpdateOpen, onOpen: onUpdateOpen, onClose: onUpdateClose } = useDisclosure()
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [productId, setId] = useState(null)


    useEffect(() => {
        dispatch(getInventory)
    }, []);

    const handleAddChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setProduct({ ...product, [name]: value })
    }
    const handleAddProduct = () => {
        dispatch(addProduct(product)).then((res) => {
            toast({
                title: 'Product Add successfull.',
                description: "We've Add new Product in DataBase.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })

            onAddClose()

            setProduct(initialProduct)
            
        })
    }
    const handleDelete = (id) => {
        console.log("hello")
        dispatch(deleteProduct(id))
    }
    const handleUpdateProduct = (id) => {
        // console.log("sk",id)
        dispatch(getSingleProduct(id)).then((res) => {
            // console.log(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setImage(res.data.image)
            setPrice(res.data.price)
            setId(res.data.id)
        })
            .catch((error) => {

            })
        onUpdateOpen()
    }
    const handleSubmitUpdated = () => {
        let obj = {
            title,
            price,
            description,
            image,
        }
        dispatch(updatedSingleProduct(productId, obj)).then((res) => {
            dispatch(getInventory)
            console.log(res.data)
            onUpdateClose()
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <DIV>
            <space direction="vertical">
                <Box className="add-menu">
                    <h1>Add New Product</h1>
                    <Button type="primary" shape="circle" onClick={onAddOpen}>+</Button>

                </Box>
                <Modal

                    isOpen={isAddOpen}
                    onClose={onAddClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add New Product</ModalHeader>
                        <ModalCloseButton />
                        <FormControl>
                            <ModalBody>
                                <FormLabel>Product Title</FormLabel>
                                <Input placeholder='Product Title' onChange={handleAddChange} name={"title"} value={product.title} />

                                <FormLabel>Product Image</FormLabel>
                                <Input placeholder='Product Image' type="url" onChange={handleAddChange} name={"image"} value={product.image} />

                                <FormLabel>Price</FormLabel>
                                <Input placeholder='Price' type="number" onChange={handleAddChange} name={"price"} value={product.price} />
                                <FormLabel>Category</FormLabel>
                                <Input placeholder='Category' onChange={handleAddChange} name={"category"} value={product.category} />
                                <FormLabel>Rating</FormLabel>
                                <Input placeholder='Rating' type="number" onChange={handleAddChange} name={"rating"} value={product.rating} />
                                <FormLabel>Num_of_Votes</FormLabel>
                                <Input placeholder='Num_of_Votes' type="number" onChange={handleAddChange} name={"numVotes"} value={product.numVotes} />
                                <FormLabel>Description</FormLabel>
                                <Input placeholder='Description' type="text" onChange={handleAddChange} name={"description"} value={product.description} />
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleAddProduct}>
                                    Add
                                </Button>
                                <Button onClick={onAddClose}>Cancel</Button>
                            </ModalFooter>
                        </FormControl>
                    </ModalContent>
                </Modal>

                <Table
                    loading={isLoading}
                    columns={[
                        {
                            title: "Image",
                            dataIndex: "image",
                            key: "image",
                            render: (link) => {
                                return <Image width={80} src={link} />;
                            },
                        },
                        {
                            title: "Title",
                            dataIndex: "title",
                            key: "title",
                        },
                        {
                            title: "Price",
                            dataIndex: "price",
                            key: "price",
                            render: (value) => <span>${value}</span>,
                        },
                        {
                            title: "Rating",
                            dataIndex: "rating",
                            key: "rating",
                            render: (rating) => {
                                return <Rate value={rating} allowHalf disabled />;
                            },
                        },
                        {
                            title: "Category",
                            dataIndex: "category",
                            key: "category"
                        },
                        {
                            title: "Description",
                            dataIndex: "description",
                            key: "description"
                        },
                        {
                            title: 'Actions',
                            dataIndex: 'actions',
                            key: 'actions',
                            render: (_, record) => (
                                <Space key={record.id}>
                                    <Button type="primary" ghost onClick={() =>
                                        handleUpdateProduct(record.id)}>Update</Button>
                                    <Button type="primary" danger ghost onClick={() => { handleDelete(record.id) }}>Delete</Button>
                                </Space>
                            ),
                        },


                    ]}
                    dataSource={products}
                    pagination={{
                        pageSize: 8,
                    }}
                ></Table>
                <Modal

                    isOpen={isUpdateOpen}
                    onClose={onUpdateClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Product</ModalHeader>
                        <ModalCloseButton />
                        <FormControl>
                            <ModalBody>
                                <FormLabel>Product Title</FormLabel>
                                <Input placeholder='Product Title' value={title} onChange={(e) => setTitle(e.target.value)} />

                                <FormLabel>Product Image</FormLabel>
                                <Input placeholder='Product Image' type="url" value={image} onChange={(e) => setImage(e.target.value)} />

                                <FormLabel>Price</FormLabel>
                                <Input placeholder='Price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

                                <FormLabel>Description</FormLabel>
                                <Input placeholder='Description' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmitUpdated}>
                                    Update
                                </Button>
                                <Button onClick={onUpdateClose}>Cancel</Button>
                            </ModalFooter>
                        </FormControl>
                    </ModalContent>
                </Modal>

            </space>
        </DIV>
    );
}
export default Inventory;



const DIV = styled.div`
    
    /* CSS for the Box component */
.add-menu{
  background-color: white;
  width: 100%;
  padding: 5px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically in the center */
}

.add-menu h1 {
  font-size: 22px;
  margin:0 0 0 10px; 
}


/* CSS for the table */
.ant-table {
  width: 100%; /* Set the width of the table */
}

/* CSS for table headers */
.ant-table-thead th {
  font-weight: bold; /* Make header text bold */
}

/* CSS for table rows */
.ant-table-tbody > tr > td {
  padding: 2px 2px; /* Add padding to cells */
  font-size:12px;
}

/* CSS for table cell with 'Image' */
.ant-table-tbody > tr > td:nth-child(1) {
  text-align: center; /* Center align the 'Image' cell */
}

/* CSS for table cell with 'Price' */
.ant-table-tbody > tr > td:nth-child(3) {
  text-align: center; /* Center align the 'Price' cell */
}

/* CSS for table cell with 'Rating' */
.ant-table-tbody > tr > td:nth-child(4) {
  text-align: center; /* Center align the 'Rating' cell */
  width: 100px;
  svg{
    width: 10px;
   height: 10px;
  }
}

/* CSS for table cell with 'Actions' */
.ant-table-tbody > tr > td:last-child {
  text-align: center; /* Center align the 'Actions' cell */
}

`
