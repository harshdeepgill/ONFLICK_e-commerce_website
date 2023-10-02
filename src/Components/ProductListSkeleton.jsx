import React from "react";
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";

const ProductListSkeleton = () => {
  return (
    <>
      {/* Navbar Skeleton */}
      <Box
        bg="gray.200"
        color="white"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Skeleton height="50px" width="80px" />
        <Skeleton height="50px" width="80px" />
        <Skeleton height="50px" width="80px" />
        <Skeleton height="50px" width="80px" />
        <Skeleton height="50px" width="80px" />
        <Skeleton height="50px" width="80px" />
      </Box>

      {/* Sidebar Skeleton */}
      <Box
        bg="gray.200"
        p={4}
        height="100vh"
        width="250px"
        position="fixed"
        top="0"
        left="0"
        marginRight={5}
        marginTop={10}
      >
        <Skeleton height="30px" mb={10} />
        {[...Array(12)].map((_, index) => (
          <Skeleton key={index} height="20px" mb={2} />
        ))}
      </Box>

      {/* Product List Skeleton */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        p={4}
        justifyItems="center"
        alignItems="center"
        marginLeft={255}
      >
        {[...Array(6)].map((_, index) => (
          <GridItem key={index}>
            <Box p={4} shadow="lg" borderWidth="1px" borderRadius="md">
              <Skeleton height="200px" width="100%" mb={4} />
              <Skeleton height="10px" width="200px" mb={2} />
              <Skeleton height="10px" width="60%" />
            </Box>
          </GridItem>
        ))}
      </Grid>

          




    </>
  );
};

export default ProductListSkeleton;
