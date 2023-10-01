import { Avatar, Button, Input, Rate, Space, Table, Typography } from "antd";
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
    const [product,setProduct] = useState(initialProduct)
    const { isLoading, isError, products } = useSelector((store) => store.adminReducer)
    const dispatch = useDispatch()
    const toast = useToast()
    const { isOpen:isUpdateOpen, onOpen:onUpdateOpen, onClose:onUpdateClose } = useDisclosure()
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure()
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [productId,setId] = useState(null)


    useEffect(() => {


        dispatch(getInventory)
    }, []);
    //   console.log(products)
    const handleAddChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)
         setProduct({ ...product, [name]: value })
    }
    const handleAddProduct=()=>{
        dispatch(addProduct(product)).then((res)=>{
            toast({
                title: 'Product Add successfull.',
                description: "We've Add new Product in DataBase.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            setProduct(initialProduct)
        })
    }
    const handleDelete = (id) => {
        dispatch(deleteProduct(id))
    }
    const handleUpdateProduct=(id)=>{
        // console.log("sk",id)
        dispatch(getSingleProduct(id)).then((res)=>{
           // console.log(res.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setImage(res.data.image)
            setPrice(res.data.price)
            setId(res.data.id)
        })
        .catch((error)=>{

        })
        onUpdateOpen()
    }
const handleSubmitUpdated=()=>{
    let obj ={
        title,
        price,
        description,
        image,
        }
    dispatch(updatedSingleProduct(productId,obj)).then((res)=>{
        dispatch(getInventory)
        console.log(res.data)
        onUpdateClose()
    }).catch((error)=>{
        console.log(error)
    })

}
    return (
        <Space size={10} direction="vertical">
            <Box bg='white' w='100%' px="10px" p="5px" border="1px solid black" display="flex" justifyContent="space-between">
                <h1>Add New Product</h1>
                <Button  fontSize="12px" onClick={onAddOpen}>+</Button>
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
                            <Input placeholder='Price' type="number"onChange={handleAddChange} name={"price"} value={product.price}  />
                            <FormLabel>Category</FormLabel>
                            <Input placeholder='Category' onChange={handleAddChange} name={"category"} value={product.category}  />
                            <FormLabel>Rating</FormLabel>
                            <Input placeholder='Rating' type="number"onChange={handleAddChange} name={"rating"} value={product.rating}  />
                            <FormLabel>Num_of_Votes</FormLabel>
                            <Input placeholder='Num_of_Votes' type="number"onChange={handleAddChange} name={"numVotes"}  value={product.numVotes} />
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
                        key:"image",
                        render: (link) => {
                            return <Avatar src={link} />;
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
                        key:"price",
                        render: (value) => <span>${value}</span>,
                    },
                    {
                        title: "Rating",
                        dataIndex: "rating",
                        key:"rating",
                        render: (rating) => {
                            return <Rate value={rating} allowHalf disabled />;
                        },
                    },
                    {
                        title: "Category",
                        dataIndex: "category",
                        key:"category"
                    },
                    {
                        title: "Description",
                        dataIndex: "description",
                        key:"description"
                    },
                    {
                        title: 'Actions',
                        dataIndex: 'actions',
                        key: 'actions',
                        render: (_, record) => (
                            <Space key={record.id}>
                                <Button  onClick={()=>
                                    handleUpdateProduct(record.id)}>Update</Button>
                                <Button onClick={() => { handleDelete(record.id) }}>Delete</Button>
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
                            <Input placeholder='Product Title' value={title}  onChange={(e)=>setTitle(e.target.value)}/>

                            <FormLabel>Product Image</FormLabel>
                            <Input placeholder='Product Image' type="url"  value={image} onChange={(e)=>setImage(e.target.value)}/>

                            <FormLabel>Price</FormLabel>
                            <Input placeholder='Price' type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        
                            <FormLabel>Description</FormLabel>
                            <Input placeholder='Description' type="text" value={description}  onChange={(e)=>setDescription(e.target.value)}/>




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

        </Space>
    );
}
export default Inventory;



