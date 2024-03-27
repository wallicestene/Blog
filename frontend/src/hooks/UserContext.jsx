/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./useReducer";

const userContext = createContext();

// Provider Component
export const UserContextProvider = ({ children }) => {
  return (
    <userContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </userContext.Provider>
  );
};
// Custom Hook to access the Context
// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(userContext);
};
