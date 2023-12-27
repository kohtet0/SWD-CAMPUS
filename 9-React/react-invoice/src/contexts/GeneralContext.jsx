import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Apple",
      price: 500,
    },
    {
      id: 2,
      name: "Mango",
      price: 1500,
    },
    {
      id: 3,
      name: "Banana",
      price: 200,
    },
    {
      id: 4,
      name: "Orange",
      price: 600,
    },
    {
      id: 5,
      name: "Lime",
      price: 100,
    },
  ]);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };

  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        removeRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
