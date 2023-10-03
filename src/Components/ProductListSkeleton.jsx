import React from "react";
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";

const ProductListSkeleton = () => {
  return (
    <>
      {/* Navbar Skeleton */}
      <Box
        bg="white"
        color="white"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Skeleton height="50px" width="180px" />
        <Skeleton height="30px" width="120px" />
        <Skeleton height="30px" width="100px" />
        <Skeleton height="30px" width="100px" />
        <Skeleton height="30px" width="250px" />
        <Skeleton height="30px" width="40px" />
        <Skeleton height="30px" width="40px" />
      </Box>

      {/* Sidebar Skeleton */}
      <Box
        bg="white"
        p={4}
        height="100vh"
        width="250px"
        position="fixed"
        top="0"
        left="0"
        marginRight={5}
        marginTop={20}
      >
       
        {/* {[...Array(12)].map((_, index) => (
          <Skeleton key={index} height="20px" mb={2} />
        ))} */}

        <Skeleton height="30px" width="80%" paddingLeft={1} mt={20} mb={10} />
        <Skeleton height="15px" width="80%" paddingLeft={1}  mb={10} />
        <Skeleton height="15px" width="60%" paddingLeft={1} mb={10} />
        <Skeleton height="15px" width="60%" paddingLeft={1} mb={10} />
        <Skeleton height="15px" width="70%" paddingLeft={1} mb={10} />
        <Skeleton height="15px" width="60%" paddingLeft={1} mb={10} />
        <Skeleton height="15px" width="80%" paddingLeft={1} mb={10} />
        <Skeleton height="15px" width="80%" paddingLeft={1} mb={10} />
      </Box>

      {/* Product List Skeleton */}
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        p={4}
        justifyItems="center"
        alignItems="center"
        marginLeft={255}
      >
        {[...Array(4)].map((_, index) => (
          <GridItem key={index}>
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              <Skeleton height="400px" width="250px" mb={4} />
              <Skeleton height="20px" width="150px" mb={2} />
              <Skeleton height="10px" width="60%" mb={2} />
              <Skeleton height="10px" width="60%" mb={2} />
              <Skeleton height="50px" width="100%" />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProductListSkeleton;