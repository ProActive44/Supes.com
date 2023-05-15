import { createContext, useReducer, useState } from 'react';
import Reducer from './Reducer';
import { useDisclosure } from '@chakra-ui/react';


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

  const [isLogin, setIsLogin] = useState();
  const [currUser, setCurrUser] = useState({});
  const [users, dispatch] = useReducer(Reducer, [])
  const {
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
    isOpen: isOpenAlert,
  } = useDisclosure();

  const loginFun = (state)=> {
    setIsLogin(true);
    setCurrUser(state)
  }
  const signUpFun = (data)=> {
    setIsLogin(true);
    dispatch({type:"new_User", payload:data})
  }
  const logout = () => {
    setIsLogin(false);
  }


    return ( 
    <AuthContext.Provider value={{isLogin, loginFun, signUpFun, logout, onOpenAlert, onCloseAlert, isOpenAlert}}>
      {children}
    </AuthContext.Provider>);
};

export default AuthContextProvider;