import React from "react";
import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";
import { auto } from "@popperjs/core";

const LandingPageSkeleton = () => {
  return (
    <div>
      {/* Navbar Skeleton */}
      {/* <Box
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
      </Box> */}
      <Box
        bg="gray.200"
        color="white"
        p={4}
        paddingTop={20}
        pb={10}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={200}
        margin={auto}
        width="100%"
      ></Box>
      <Box
        bg="gray.200"
        color="white"
        marginTop={50}
        p={4}
        paddingTop={20}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={400}
        width="100%"
      ></Box>
    </div>
  );
};

export default LandingPageSkeleton;