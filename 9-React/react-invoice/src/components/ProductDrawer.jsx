import React from "react";
import DrawerHeader from "./DrawerHeader";
import DrawerCloseBtn from "./DrawerCloseBtn";
import DrawerProductShow from "./DrawerProductShow";
import DrawerForm from "./DrawerForm";
import ProductUiTemplate from "./ProductUiTemplate";

const ProductDrawer = () => {
  return (
    <div
      id="drawer-right-example"
      className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      <DrawerHeader />
      <DrawerCloseBtn />
      <DrawerProductShow />
      <DrawerForm />
      <ProductUiTemplate />
    </div>
  );
};

export default ProductDrawer;
