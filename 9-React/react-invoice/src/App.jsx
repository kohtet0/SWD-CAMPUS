import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Table from "./components/Table";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-5 sm:px-10">
        <Nav />
        <Form />
        <Table />
      </div>
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;
