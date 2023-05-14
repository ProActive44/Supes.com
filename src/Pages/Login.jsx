import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Img,
  Input,
  ModalCloseButton,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = ({handleLoginClick}) => {
  // border={"2px solid black"}

  
  return (
    <Box  m="auto">
        {/* <ModalCloseButton onClose={onClose} /> */}
      <Flex align="center">
        <Box w={"50%"} bg="white" boxShadow="inset 0 0 1000px #F56565">
          <Image
            src="https://pngimg.com/uploads/wonder_woman/wonder_woman_PNG41.png"
            alt="Wonder Women"
            w="100%"
            // ml="auto"
          />
        </Box>
        {/* <Spacer/> */}
        <Box w="50%">
          <Box w={"80%"} h={"90%"} m="auto" my={"5%"}>
            <FormControl>
              <Heading color="red.400" fontSize="4xl" fontWeight="bold">
                Login
              </Heading>
              <FormLabel mt={"5"} mb={'0px'}>Name</FormLabel>
              <Input
                variant="flushed"
                placeholder="Enter Your Name"/>

              <FormLabel mt={"5"} mb={'0px'}>Email</FormLabel>
              <Input variant="flushed" placeholder="Enter Your Email" />

              <FormLabel mt={"5"} mb={'0px'}>Password</FormLabel>
              <Input variant="flushed" placeholder="Enter Your Password" />

              <Button mt={"5"} bg="#FC8181" _hover={{bg:"#F56565"}}>Login</Button>
              <Text my={1}> or </Text>
              <Button size="md" onClick={handleLoginClick}>Create Account</Button>
              <Text my={1}>or Login with</Text> 
              <Flex w={"40%"} m="auto" my={5}>
                <Link>
                  <Tooltip label="google" hasArrow>
                    <Box w="30px">
                      <Img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png?f=avif&w=128"
                        alt="Google"
                      />
                    </Box>
                  </Tooltip>
                </Link>
                <Spacer />
                <Link>
                  <Tooltip label="facebook" hasArrow>
                    <Box w="30px">
                      <Img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-2019-1597680-1350125.png?f=avif&w=128"
                        alt="Google"
                      />
                    </Box>
                  </Tooltip>
                </Link>
                <Spacer />
                <Link>
                  <Tooltip label="apple" hasArrow>
                    <Box w="30px">
                      <Img
                        src="https://w7.pngwing.com/pngs/775/812/png-transparent-apple-logo-apple-logo-cupertino-company-apple-iphone-electronics-leaf-computer-thumbnail.png"
                        alt="Google"
                      />
                    </Box>
                  </Tooltip>
                </Link>
              </Flex>
            </FormControl>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
