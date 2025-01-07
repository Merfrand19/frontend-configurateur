import { useState, createContext, useContext } from "react";
import React from 'react' 
import bikeImage from '../assets/bike.png';

const AppContext=createContext()

export const AppContextProvider = ({children}) => {
  const [brand, setBrand] = useState("");
  const [identity, setIdentity]= useState("");
  const [bike, setBike]= useState(bikeImage);
  return (
    <AppContext.Provider value={{brand, setBrand, identity, setIdentity, bike, setBike}}>
      {children}
    </AppContext.Provider>
  )
}

export function useLayoutContext() {
  return useContext(AppContext)
}

export default AppContext