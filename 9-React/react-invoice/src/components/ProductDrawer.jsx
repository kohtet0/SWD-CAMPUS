import React from "react";
import DrawerHeader from "./DrawerHeader";
import DrawerCloseBtn from "./DrawerCloseBtn";
import DrawerProductShow from "./DrawerProductShow";
import DrawerForm from "./DrawerForm";
import ProductUiTemplate from "./ProductUiTemplate";

const ProductDrawer = ({ addProduct, products, openDrawer, handleDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
        !openDrawer && "translate-x-full"
      } bg-white w-80 dark:bg-gray-800`}
    >
      <DrawerHeader />
      <DrawerCloseBtn handleDrawer={handleDrawer} />
      <DrawerProductShow products={products} />
      <DrawerForm addProduct={addProduct} />
    </div>
  );
};

export default ProductDrawer;
