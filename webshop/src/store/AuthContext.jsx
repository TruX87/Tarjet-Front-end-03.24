import React, { createContext, useState } from 'react';
 
// 1. Create a context --- saan kätte globaalset muutujat/muuta teda
const AuthContext = createContext();
 
// 2. Create a provider component  --- temaga seadistan globaalsuse
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") !== null);

  
 
  return (              //muutujad ja funktsioonid, mis on globaalsed
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export { AuthContext, AuthContextProvider };