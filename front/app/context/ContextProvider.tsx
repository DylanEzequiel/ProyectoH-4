"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

export interface IUserContext {
  userToken: null | string;
  setUserToken: (token: string | null) => void;
}

//create context
export const UserContext = createContext<IUserContext>({
  userToken: null,
  setUserToken: () => {},
});

export function useUserContext() {
  return useContext(UserContext);
}
//use context in the app

const ContextProvider: React.FC<{ children: ReactNode }> = ({children}: {children: ReactNode;}) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = Cookies.get("token")
    savedToken ? setUserToken(savedToken) : setUserToken(null);
  }, [userToken]);


  //extra 
  // useEffect(() => {
  //   const savedToken = Cookies.get("token");
  //   savedToken ? setUserToken(savedToken) : setUserToken(null);
  // }, []);

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
