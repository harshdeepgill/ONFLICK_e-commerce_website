import React from "react";
import "./styles.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Img,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const initState = {
  user_email: "",
};

const Footer = () => {
  const [email, setMail] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMail({ ...email, [name]: value });
  };


  return (
    <Box>
      <Box bg="rgb(0,0,0)">
        <Text
          w={{ sm: "95%", md: "70%", lg: "70%" }}
          margin="auto"
          fontSize="15px"
          color="white"
          padding={2}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </Box>
      <Box
        p={{ base: "4", sm: "4", md: "10", lg: "10" }}
        display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
        gap={10}
        width="100%"
      >
        <Box width={{ base: "100%", sm: "100%", md: "50%", lg: "30%" }}>
          <Box mt={4} position="relative">
            <form>
              <Input
                focusBorderColor="none"
                name="user_email"
                value={email.user_email}
                outlineColor="var(--primary1)"
                variant="unstyled"
                p={3}
                placeholder="Email Adress"
                onChange={handleChange}
              />
              <Button
                type="submit"
                bg="var(--primary1)"
                color="white"
                position="absolute"
                top="1"
                right="0"
              >
                SUSCRIBE
              </Button>
            </form>
          </Box>
          <Box width="100%" display="flex" margin={10} padding={5}>
            <Text padding={3} className="social-icon hover-effect">
              <FaFacebookF fontSize="30px" />
            </Text>
            <Text padding={3} className="social-icon hover-effect">
              <FaTwitter fontSize="30px" />
            </Text>
            <Text padding={3} className="social-icon hover-effect">
              <FaInstagram fontSize="30px" />
            </Text>
            <Text padding={3} className="social-icon hover-effect">
              <FaYoutube fontSize="30px" />
            </Text>
            <Text padding={3} className="social-icon hover-effect">
              <FaLinkedinIn fontSize="30px" />
            </Text>
          </Box>

          <Box width={{ base: "100%", sm: "100%", md: "40%", lg: "50%"}} padding={5}>
            <Text textAlign="left">Download The App</Text>
            <Box display="flex">
              <Img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293"
                alt=""
              />
              <Img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293" />
            </Box>
          </Box>
        </Box>

        <Grid
          mt={4}
          display={{ base: "none", sm: "none", md: "grid", lg: "grid" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={6}
         margin={5}
        >
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              Department
            </Text>
            <Box
              mt={4}
              // borderRight="1px solid "
              // borderColor="lightgrey"
              textAlign="left"
            >
              <Stack>
                <Text>Fashion</Text>
                <Text>Education product</Text>
                <Text>Frozen Food</Text>
                <Text>Beverages</Text>
                <Text>Organic Grocery</Text>
                <Text>Office Supplies</Text>
                <Text>Beauty Products</Text>
                <Text>Books</Text>
                <Text>Electronics & Gadget</Text>
                <Text>Travel Accessories</Text>
                {/* <Text>Fitness</Text>
                <Text>Sneakers</Text>
                <Text>Toys</Text>
                <Text>Furniture</Text> */}
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              About Us
            </Text>
            <Box
              mt={10}
              // borderRight="1px solid "
              // borderColor="lightgrey"
              textAlign="left"
            >
              <Stack>
                {/* <Text>About Shopcart</Text> */}
                <Text>About Shopcart</Text>
                <Text>Careers</Text>
                <Text>News and Blog</Text>
                <Text>Help</Text>
                <Text>Press Center</Text>
                <Text>Shop By Location</Text>
                <Text>Shopcart Brands</Text>
                <Text>Affiliate & Partners</Text>
                <Text>Ideas & Guides</Text>
              </Stack>
            </Box>
          </GridItem>
          <GridItem textAlign="left">
            <Text textAlign="left" fontWeight="bold">
              HELP
            </Text>
            <Box
              mt={4}
              // borderRight="1px solid "
              // borderColor="lightgrey"
              textAlign="left"
            >
              <Stack>
                <Text>Track Your Order</Text>
                <Text>Return Textolicy</Text>
                <Text>Bulk Orders</Text>
                <Text>Why Buy Direct</Text>
                <Text>Rock In India</Text>
                <Text>Warranty & SuTextTextort</Text>
                <Text>Service Centers</Text>
                <Text>FAQs</Text>
              </Stack>
            </Box>
          </GridItem>

          <GridItem textAlign="left">
            <Text textAlign="left" fontWeight="bold">
              COMPANY
            </Text>
            <Box
              paddingLeft={4}
              mt={4}
              // borderLeft="1px solid"
              // borderColor="lightgrey"
            >
              <Stack>
                <Text>About boAt</Text>
                <Text>News</Text>
                <Text>Read Our Blog</Text>
                <Text>Careers</Text>
                <Text>Security</Text>
                <Text>Terms of Service</Text>
                <Text>Textrivacy Textolicy</Text>
                <Text>Investor Relations</Text>
                <Text></Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
        {/* for tabs only mobile screens */}
        <Tabs>
          <TabList
            width="100%"
            marginTop="4"
            display={{ base: "flex", sm: "flex", md: "none", lg: "none" }}
            justifyContent="space-evenly"
          >
            <Tab>SHOP</Tab>
            <Tab>HELP</Tab>
            <Tab>COMPANY</Tab>
          </TabList>
          <TabPanels
            display={{ base: "block", sm: "block", md: "none", lg: "none" }}
          >
            <TabPanel justifyContent="space-evenly" display="flex">
              <Box mt={4} textAlign="left">
                <Stack>
                  <Text>True Wireless Earbuds</Text>
                  <Text>Wired HeadTexthones</Text>
                  <Text>Home Audio</Text>
                  <Text>Smart Watches</Text>
                  <Text>Misfit</Text>
                  <Text>Rock in India</Text>
                </Stack>
              </Box>
              <Box textAlign="left">
                <Stack>
                  <Text>Wired HeadTexthones</Text>
                  <Text>Wireless STexteakers</Text>
                  <Text>Mobile Accessories</Text>
                  <Text>TRebel</Text>
                  <Text>Gift Card</Text>
                  <Text>Earb Rs 100</Text>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel justifyContent="space-evenly" gap={4} display="flex">
              <Box textAlign="left">
                <Stack>
                  <Text>Track Your Order</Text>
                  <Text>Return Textolicy</Text>
                  <Text>Bulk Orders</Text>
                  <Text>Why Buy Direct</Text>
                  <Text>Rock In India</Text>
                </Stack>
              </Box>
              <Box textAlign="left">
                <Stack>
                  <Text>Warranty & SuTextTextort</Text>
                  <Text>Service Centers</Text>
                  <Text>FAQs</Text>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel justifyContent="space-evenly" display="flex" gap={4}>
              <Box textAlign="left">
                <Stack>
                  <Text>About Us</Text>
                  <Text>News</Text>
                  <Text>Read Our Blog</Text>
                  <Text>Careers</Text>
                  <Text>Security</Text>
                  <Text>Terms of Service</Text>
                  <Text>Textrivacy Textolicy</Text>
                  <Text>Investor Relations</Text>
                </Stack>
              </Box>
              <Box textAlign="left">
                <Stack>
                  <Text>Security</Text>
                  <Text>Terms of Service</Text>
                  <Text>Textrivacy Textolicy</Text>
                  <Text>Investor Relations</Text>
                </Stack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box
        p={2}
        display={{ base: "block", sm: "block", md: "flex", lg: "flex" }}
        justifyContent="space-between"
        borderBottom="1px solid lightgrey"
        width="100%"
      >
        
      </Box>
      <Box>
        <Text p={4} textAlign="left">
          © 2022 Imagine Marketing Limited. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export { Footer };
