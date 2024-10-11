import React, { createContext, useState } from 'react';

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [info, setInfo] = useState("This is data from the context for the About Us page.");
  
  return (
    <Context.Provider value={{ info, setInfo }}>
      {children}
    </Context.Provider>
  );
};
