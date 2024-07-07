// /* eslint-disable react/prop-types */
// import { createContext, useContext, useState } from "react";

// export const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   return (
//     <DataContext.Provider
//     value={{ data, setData, isLoading, setIsLoading, error, setError }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };
// export const useDataContext = () => useContext(DataContext);
