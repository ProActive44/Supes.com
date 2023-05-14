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
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Box bg={"coral"} maxW={'1366px'} m={'auto'}>
        
      <Box mx={8}>
        <Flex>
          <Box w={20} >
            <Link to="/home">
            <Center >
              <Image
                src="https://www.transparentpng.com/thumb/superman-logo/VJ8non-superman-logo-free-download-transparent.png"
                alt="Logo"
                filter="brightness(150%)"
              />
            </Center>
            </Link>
          </Box>
          <Spacer />
          <HStack spacing={5} _hover={{cursor:"pointer"}}>
          <Link to="/home"> <Text display={['none', 'none', 'none','block']} as='b'>Home</Text> </Link>
          <Link to="/DashBoard"><Box display={['none', 'none', 'none','block']} as='b'>DashBoard</Box> </Link>
          <Link to="/Supes"><Box display={['none', 'none', 'none','block']} as='b'>All Supes</Box> </Link>
          </HStack>

          <Spacer />
          <Center>
          <Box>
            <InputGroup >
                <Input bg={'white'} placeholder="Search Your Favorite Supe" w={[100, 200,300,500, 500]}/>
                <InputRightAddon as={Button}>Search</InputRightAddon>
            </InputGroup>
          </Box>
          </Center>
          <Spacer />
          <Stack spacing={4} direction='row' align='center'>
                <Button display={['none', 'none', 'none','block']} size={['xs','sm','md']}>Log in</Button>
                <Button display={['none', 'none', 'none','block']}>Sign up</Button>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavBar;
