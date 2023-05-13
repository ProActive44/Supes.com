Supes.com

Home Page 
Login / SignUp
Supes Page
Details Page
New Appoinment


Using react and Chakra UI


Installations 

Create react app
npx create-react-app supesdotcom

Chakra UI
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
                   Wrap App Component by ChakraProvider comp
                       In Index.js
                            -    import { ChakraProvider } from '@chakra-ui/react'
                         <ChakraProvider>  
                                 <App />
                        </ChakraProvider>

React router Dom
npm i react-router-dom
                      Wrap App Component by ChakraProvider comp.  In Index.js
                             -   import { BrowserRouter } from 'react-router-dom'
                          <BrowserRouter>
                           <ChakraProvider>
                               <App />
                            </ChakraProvider>
                      </BrowserRouter>

axios 
npm i axios


AuthContext.jsx
Create and export AuthContext 
                      import { createContext } from 'react';
                      export const AuthContext = createContext() 
         and export AuthContextProvider by creating a comp. 
const AuthContextProvider = ({children}) => {
    return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>);
};
export default AuthContextProvider;

Now wrap app.js in it. 
<BrowserRouter>
    <ChakraProvider>
       <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>

