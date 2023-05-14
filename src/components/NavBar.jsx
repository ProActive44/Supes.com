import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
const islogin = true;

const NavBar = () => {
  const {
    onOpen: onOpen1,
    onClose: onClose1,
    isOpen: isOpen1,
  } = useDisclosure();
  const {
    onOpen: onOpen2,
    onClose: onClose2,
    isOpen: isOpen2,
  } = useDisclosure();

  const handleLoginClick = () => {
    onClose1();
    onOpen2();
  };

  const handleSignUpClick = () => {
    onClose2();
    onOpen1();
  };

  return (
    <>
      <Box
        bg={"coral"}
        maxW={"1366px"}
        m={"auto"}
        h={"60px"}
        position={"sticky"}
        top={0}
      >
        <Box mx={8} pt={"10px"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Box w={20}>
              <Link to="/home">
                <Center>
                  <Image
                    src="https://www.freeiconspng.com/uploads/batman-vs-superman-logo-png-26.png"
                    alt="Logo"
                    filter="brightness(150%)"
                  />
                </Center>
              </Link>
            </Box>
            <Spacer />
            <HStack spacing={5} _hover={{ cursor: "pointer" }}>
              <Link to="/home">
                {" "}
                <Text display={["none", "none", "none", "block"]} as="b">
                  Home
                </Text>{" "}
              </Link>
              <Link to="/DashBoard">
                <Box display={["none", "none", "none", "block"]} as="b">
                  DashBoard
                </Box>{" "}
              </Link>
              <Link to="/Supes">
                <Box display={["none", "none", "none", "block"]} as="b">
                  All Supes
                </Box>{" "}
              </Link>
            </HStack>

            <Spacer />
            <Center>
              <Box>
                <InputGroup>
                  <Input
                    bg={"white"}
                    placeholder="Search Your Favorite Supe"
                    w={[100, 200, 300, 500, 500]}
                  />
                  <InputRightAddon as={Button}>Search</InputRightAddon>
                </InputGroup>
              </Box>
            </Center>
            <Spacer />
            <Stack spacing={4} direction="row" align="center">
              <Button
                display={["none", "none", "none", "block"]}
                onClick={onOpen1}
              >
                Log in
              </Button>
              <Button
                display={["none", "none", "none", "block"]}
                onClick={onOpen2}
              >
                Sign up
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Box>
      {/* LogIn */}
      <Modal
        isOpen={isOpen1 ? true : islogin ? false : true}
        onClose={onClose1}
        closeOnOverlayClick={false}
        size={"5xl"}
        motionPreset="slideInRight"
        motion={{ motionDuration: 1000 }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <Login handleLoginClick={handleLoginClick} />
        </ModalContent>
      </Modal>

      {/* Sign up */}
      <Modal
        isOpen={isOpen2}
        onClose={onClose2}
        closeOnOverlayClick={false}
        size={"5xl"}
        motionPreset="slideInRight"
        motion={{ motionDuration: 1000 }}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton color={"white"} />
          <SignUp handleSignUpClick={handleSignUpClick} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavBar;
