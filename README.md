# Supes.com

## Home Page 
## Login / SignUp
## Supes Page
## Details Page
## New Appoinment


Using react and Chakra UI


## Installations 

### Create react app
   _npx create-react-app supesdotcom_

### Chakra UI
   _npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion_
                   Wrap App Component by ChakraProvider comp
                       In Index.js
                        `    -    import { ChakraProvider } from '@chakra-ui/react'
                         <ChakraProvider>  
                                 <App />
                        </ChakraProvider>`

### React router Dom
   _npm i react-router-dom_
                      Wrap App Component by ChakraProvider comp.  In Index.js
                             -   import { BrowserRouter } from 'react-router-dom'
                          `<BrowserRouter>
                           <ChakraProvider>
                               <App />
                            </ChakraProvider>
                      </BrowserRouter>`

### axios 
   _npm i axios_

-----------------------------------


## AuthContext.jsx
        Create and export AuthContext 
                      import { createContext } from 'react';
                      export const AuthContext = createContext() 
         and export AuthContextProvider by creating a comp. 
               ` const AuthContextProvider = ({children}) => {
                    return (
                    <AuthContext.Provider>
                    {children}
                    </AuthContext.Provider>);
                };
                export default AuthContextProvider;`

        Now wrap app.js in it. 
                `<BrowserRouter>
                    <ChakraProvider>
                    <AuthContextProvider>
                            <App />
                        </AuthContextProvider>
                    </ChakraProvider>
                </BrowserRouter>`

