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
  
  const SignUp = ({handleSignUpClick}) => {

    return (
      <Box w='100%'   >
        
        <Flex >
          
          <Box w="50%" my={'5'}>
            <Box w={"80%"} h={"100%"} m="auto" >
              <FormControl mb={'0px'}>
                <Heading color="red.400" fontSize="4xl" fontWeight="bold">
                  Signup
                </Heading>
                <FormLabel mt={"5"} mb={"0px"}>
                  Name
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Name" />
  
                <FormLabel mt={"5"} mb={"0px"}>
                  Email
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Email" />

                <FormLabel mt={"5"} >
                  Number
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Number" type='number'/>
  
                <FormLabel mt={"5"} mb={"0px"}>
                  Password
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Password" />
  
                <Button mt={"5"} bg="#FC8181" _hover={{ bg: "#F56565" }}>
                  SignUp
                </Button>
                </FormControl>

                <Text my={3} mt={5} > Already have account? </Text>

                <Button size="md" onClick={handleSignUpClick}>Login</Button>

                <Text my={3}>or Direct Login with</Text>

                <Flex w={"40%"} m="auto" mt={5} >
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
              
            </Box>
          </Box>
  
          <Box w={"50%"} bg="white" boxShadow="inset 0 0 1000px #F56565">
            <Image
              src="https://pngimg.com/d/harley_quinn_PNG29.png"
              alt="Scarlet Witch"
              w="90%"
            />
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default SignUp;
  