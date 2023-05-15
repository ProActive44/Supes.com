import GoogleImage from '../Images/Google.png'
import FaceBookImage from '../Images/Facebook.png'
import AppleImage from '../Images/AppleLogo.png'
import WW from '../Images/WonderWoman.png'
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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { AlertBox } from "../components/AlertBox";

const initialState = {
  name: "",
  email: "",
  password: ""
}

const Login = ({handleLoginClick}) => {

  const [state, setState] = useState(initialState);
  const navigate =  useNavigate();
  const { loginFun, onOpenAlert } = useContext(AuthContext)

const handleChange = (e)=>{
   setState((prev)=>{ return {...prev, [e.target.name]: e.target.value}})
}

const handleAuthetication = ()=>{
    if(state === initialState){
       onOpenAlert()
       return;
    }
    if(state.name === "" || state.email === "" || state.password === ""){
      onOpenAlert()
      return;
    }
    console.log(state)
    loginFun(state);
    setState(initialState)
    navigate("/home")
}

useEffect(()=>{
  return (
    setState(initialState) 
  )
},[])

  
  return (
    <>
    <Box   w={["xs","sm","xl","3xl","5xl"]} m={["0 10px","0 10px","auto","auto","auto"]}>
        {/* <ModalCloseButton onClose={onClose} /> */}
      <Flex align="center" >
        <Box w={"50%"} bg="white" boxShadow="inset 0 0 1000px #F56565" display={["none","none","block","block"]}>
          <Image
            src={WW}
            alt="Wonder Women"
            w="100%"
            // ml="auto"
          />
        </Box>
        {/* <Spacer/> */}
        <Box w={["90%","90%","50%","50%"]} mx={['20px']} >
          <Box  h={"90%"} m="auto" my={"5%"}>
            <FormControl>
              <Heading color="red.400" fontSize="4xl" fontWeight="bold">
                Login
              </Heading>
              <FormLabel mt={"5"} mb={'0px'}>Name</FormLabel>
              <Input
                variant="flushed"
                placeholder="Enter Your Name"
                name="name" onChange={handleChange}
                value={state.name}/>

              <FormLabel mt={"5"} mb={'0px'}>Email</FormLabel>
              <Input variant="flushed" placeholder="Enter Your Email" value={state.email} name="email" onChange={handleChange}/>

              <FormLabel mt={"5"} mb={'0px'}>Password</FormLabel>
              <Input variant="flushed" placeholder="Enter Your Password" w={"100%"} value={state.password} name="password" onChange={handleChange}/>

              <Button mt={"5"} bg="#FC8181" _hover={{bg:"#F56565"}} onClick={handleAuthetication}>Login</Button>
              <Text my={1}> or </Text>
              <Button size="md" onClick={handleLoginClick}>Create Account</Button>
              <Text my={1}>or Login with</Text> 
              <Flex w={"40%"} m={['5', 'auto', 'auto']} my={5} gap={[6, 5, 4, 4, 2]}>
                <Link>
                  <Tooltip label="google" hasArrow>
                    <Box w="30px" >
                      <img
                        src={GoogleImage}
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
                        src={FaceBookImage}
                        alt="Facebook"
                      />
                    </Box>
                  </Tooltip>
                </Link>
                <Spacer />
                <Link>
                  <Tooltip label="apple" hasArrow>
                    <Box w="30px">
                      <Img
                        src={AppleImage}
                        alt="Apple"
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
    <AlertBox />
    </>
  );
};

export default Login;
