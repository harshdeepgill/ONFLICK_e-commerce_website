import React from 'react'
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";

const LandingPageSkeleton = () => {
  return (
    <div>
      <Box
        bg="gray.200"
        color="white"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Skeleton height="40px" width="180px" />
        <Skeleton height="40px" width="80px" />
        <Skeleton height="40px" width="80px" />
        <Skeleton height="40px" width="80px" />
        <Skeleton height="40px" width="80px" />
        <Skeleton height="40px" width="80px" />
      </Box>
    </div>
  );
}

export default LandingPageSkeleton