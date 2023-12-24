import React, { useState } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Table from "./components/Table";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
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
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <Form products={products} />
        <Table />
      </div>
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        addProduct={addProduct}
        products={products}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
      />
    </div>
  );
};

export default App;
