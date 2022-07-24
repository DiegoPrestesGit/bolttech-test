import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  // states
  const [userLogged, setUserLogged] = useState(false);
  const [user, setUser] = useState({});

  // methods

  return (
    <Context.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
