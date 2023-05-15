import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'
import { useContext, useRef } from 'react'
import { AuthContext } from '../Context/AuthContext'

export function AlertBox() {
    
    const cancelRef = useRef()
    const { isOpenAlert, onCloseAlert } = useContext(AuthContext)
  
    return (
      <>
        <AlertDialog
          isOpen={isOpenAlert}
          leastDestructiveRef={cancelRef}
          onClose={onCloseAlert}
          size={['xs','sm','md','lg']}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'red.400'}>
                 Sorry Nerd !!!
              </AlertDialogHeader>
  
              <AlertDialogBody>
                You have to fill all the Details...
                <br />
                <br />
                <Text as={'b'} color={'grey'}>"Just Because Someone Stumbles And Loses Their Path, Doesn't Mean They're Lost Forever."</Text>
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button colorScheme='red' onClick={onCloseAlert}>
                  OK
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }