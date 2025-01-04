import { useState, createContext, useContext } from "react";
import React from 'react' 

const AppContext=createContext()

export const AppContextProvider = ({children}) => {
  const [brand, setBrand] = useState("generic");
  return (
    <AppContext.Provider value={{brand, setBrand}}>
      {children}
    </AppContext.Provider>
  )
}

export function useLayoutContext() {
  return useContext(AppContext)
}

export default AppContext