import React from 'react'
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";

const LandingPageSkeleton = () => {
  return (
    <div>
      {/* Navbar Skeleton */}
      <Box
        bg="gray.200"
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
    </div>
  );
}

export default LandingPageSkeleton