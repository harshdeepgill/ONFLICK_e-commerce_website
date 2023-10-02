import React from "react";
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";

const ProductListSkeleton = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={6}
      p={4}
      justifyItems="center"
      alignItems="center"
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
  );
};

export default ProductListSkeleton;
