import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Image,
  Flex,
  Input,
  FormLabel,
  Checkbox,
  
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  ModalCloseButton,
  useDisclosure,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/productReducer/action";

const PaymentPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [carddata, setCarddata] = useState([]);
  const [status, setStatus] = useState(false);
  const [upi, setUpi] = useState("");
  const [bill, setBill] = useState(0);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { products, isLoading } = useSelector((store) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
  }));
  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(getProducts());
    const selectedProduct = products.find((ele) => ele.id === +id);
    setProduct(selectedProduct);
  }, [dispatch, id, products]);

  function postorders() {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }

  useEffect(() => {
    let storedBill = +(localStorage.getItem("total_bill") || 0);
    console.log(storedBill, typeof storedBill);
    let items = storedBill + storedBill * 0.12;
    setBill(items);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!name || !cardNum || !cvv || !month || !year) {
      toast({
        title: "Payment Failed",
        description: "All fields are required",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (cardNum.toString().length !== 12) {
      toast({
        title: "Payment Failed",
        description: "Please Enter a valid Number",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (cvv.toString().length !== 3) {
      toast({
        title: "Payment Failed",
        description: "Please Enter a valid CVV",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (parseInt(year) < 2023) {
      toast({
        title: "Payment Failed",
        description: "Card Expired",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      setStatus(true);
    }
  };

  if (status) {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }

  return (
    <Flex
      mt="100px"
      justifyContent={{
        base: "center",
        sm: "center",
        md: "space-around",
        lg: "space-around",
        xl: "space-around",
        "2xl": "space-around",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
    >
      <Box w="50%">
        <Image
          src="https://www.acquisition-international.com/wp-content/uploads/2021/05/payment.jpg"
          w="100%"
          marginTop="150px"
        />
      </Box>

      <Box w="50%" m="30px">
        <Box>
          <Heading as="h2" size="lg" mb="10px" color="pink.500">
            Total Amount : {product.price}
          </Heading>
        </Box>
        <form onSubmit={handleSubmitForm}>
          <FormLabel p="10px" color="white" bg="pink.500">
            Credit/Debit Card
          </FormLabel>

          <Box mb="10px">
            <Input
              w="95%"
              type="text"
              placeholder="CardHolder's Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Flex w="95%" mb="10px" justifyContent="space-around">
            <Box w="50%">
              <Input
                type="number"
                placeholder="Card Number"
                name="cardNum"
                value={cardNum}
                onChange={(e) => setCardNum(e.target.value)}
              />
            </Box>
            <Box w="49%">
              <Input
                type="number"
                placeholder="CVV"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </Box>
          </Flex>
          <Flex w="95%" justifyContent="space-around">
            <Box w="50%">
              <Input
                type="number"
                placeholder="MM/YY"
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </Box>
            <Box w="49%">
              <Input
                type="number"
                placeholder="Expiry Year"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Box>
          </Flex>
          <Box p="5px">
            <Checkbox mt="10px" defaultChecked>
              Save Card Details For Future
            </Checkbox>
          </Box>
          <Box mt="10px" p="5px">
            {status ? (
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader color="green" fontSize="40px" textAlign="center">
                    Thank You!
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="50%"
                    >
                      <FaCheck color="green" fontSize="150px" />
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                      <Text
                        color="pink.500"
                        fontSize="18px"
                        as="b"
                        textAlign="center"
                        mt="30px"
                      >
                        Payment Successful
                      </Text>
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() => {
                        onClose();
                        navigate("/checkout");
                      }}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            ) : (
              <Button
                color="green"
                onClick={() => {
                  onOpen();
                  postorders();
                }}
                type="submit"
                bg="pink.500"
                _hover={{
                  bg: "pink.100",
                }}
              >
                Pay Now
              </Button>
            )}
          </Box>
        </form>
        <Box mt="30px">
          <FormLabel p="10px" color="white" bg="pink.500">
            UPI
          </FormLabel>
          <Box>
            <HStack>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/270/270799.png?w=740&t=st=1683531867~exp=1683532467~hmac=c33853ef2dffd7dd06be7379621e7f0e136565092f237d9bca174767fd8fb224"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="number"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
              />
              <Button
                color="green"
                bg="pink.500"
                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
            <HStack mt="20px">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/825/825454.png?w=740&t=st=1683532131~exp=1683532731~hmac=bb1126fbad4f895b4b4a3b586a6ffba13b903c34ca6c89f30b9117f86354b5ca"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="number"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
              />
              <Button
                color="green"
                bg="pink.500"
                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
            <HStack mt="20px">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/196/196566.png?w=740&t=st=1683532246~exp=1683532846~hmac=15e1bff948042d30147dcb7b74079d842179146776d00939059556ed755dfd23"
                width="50px"
                borderRadius="50%"
              />
              <Input
                ml="30px"
                type="number"
                placeholder="Enter UPI ID"
                w="30%"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
              />
              <Button
                color="green"
                bg="pink.500"
                _hover={{
                  bg: "pink.200",
                }}
              >
                Pay Now
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default PaymentPage;
