import { React, createContext, useState } from "react";

const DataContext = createContext();
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
  const [name, setName] = useState("chioma");
  return <Provider value={{ name, setName }}>{children}</Provider>;
};

export default DataProvider;
