import GoogleImage from '../Images/Google.png'
import FaceBookImage from '../Images/Facebook.png'
import AppleImage from '../Images/AppleLogo.png'
import harleyQuinnImage from '../Images/harleyQuinn.png'
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
  import React, { useContext, useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
import { AlertBox } from "../components/AlertBox";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const signupOnServer = (state) => {
  axios.post('https://supes-json-server.onrender.com/users', state)
      .then(json => console.log(json))
      .catch(err=>console.log(err))
};


  const initialState = {
    name: "",
    email: "",
    number: "",
    password: ""
  }
  
  const SignUp = ({handleSignUpClick}) => {


    const [state, setState] = useState(initialState)
    const { loginFun, onOpenAlert } = useContext(AuthContext)
    const navigate  = useNavigate()


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
      signupOnServer( state )
      // console.log(state)
      loginFun(state);
      // setState(initialState)
      navigate("/home")
  }


    return (
      <>
      <Box w={["xs","sm","xl","3xl","5xl"]} m={["0 10px","0 10px","auto","auto","auto"]}>
        
        <Flex >
          
          <Box w={["90%","90%","90%","50%","50%"]} my={'5'}>
            <Box w={"80%"} h={"100%"} m="auto" >
              <FormControl mb={'0px'}>
                <Heading color="red.400" fontSize="4xl" fontWeight="bold">
                  Signup
                </Heading>
                <FormLabel mt={"5"} mb={"0px"}>
                  Name
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Name" value={state.name} name="name" onChange={handleChange} />
  
                <FormLabel mt={"5"} mb={"0px"}>
                  Email
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Email" value={state.email} name="email" onChange={handleChange} />

                <FormLabel mt={"5"} >
                  Mobile Number
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Mobile Number" type='number' value={state.number} name="number" onChange={handleChange} />
  
                <FormLabel mt={"5"} mb={"0px"}>
                  Password
                </FormLabel>
                <Input variant="flushed" placeholder="Enter Your Password" value={state.password} name="password" onChange={handleChange} />
  
                <Button mt={"5"} bg="#FC8181" _hover={{ bg: "#F56565" }} onClick={handleAuthetication}>
                  SignUp
                </Button>
                </FormControl>

                <Text my={3} mt={5} > Already have account? </Text>

                <Button size="md" onClick={handleSignUpClick}>Login</Button>

                <Text my={3}>or Direct Login with</Text>

                <Flex w={"40%"} mt={5} m={['5', 'auto', 'auto']} my={5} gap={[6, 5, 4, 4, 2]}>
                  <Link>
                    <Tooltip label="google" hasArrow>
                      <Box w="30px">
                        <Img
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
                          alt="FaceBook"
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
              
            </Box>
          </Box>
  
          <Box w={"50%"} bg="white" boxShadow="inset 0 0 1000px #F56565" display={["none","none","none","block","block"]}>
            <Image
              src={harleyQuinnImage}
              alt="harley quinn"
              w="90%"
            />
          </Box>
        </Flex>
      </Box>
      <AlertBox />
      </>
    );
  };
  
  export default SignUp;
  