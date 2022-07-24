import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  // states
  const [user, setUser] = useState({});

  // methods

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
