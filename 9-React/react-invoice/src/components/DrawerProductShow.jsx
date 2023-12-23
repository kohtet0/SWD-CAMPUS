import React from "react";
import ProductUiTemplate from "./ProductUiTemplate";

const DrawerProductShow = ({ products }) => {
  return (
    <div className="productShow">
      {products.map((product) => (
        <ProductUiTemplate key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DrawerProductShow;
