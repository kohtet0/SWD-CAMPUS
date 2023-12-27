import React, { useContext } from "react";
import ProductUiTemplate from "./ProductUiTemplate";
import { GeneralContext } from "../contexts/GeneralContext";

const DrawerProductShow = () => {
  const { products } = useContext(GeneralContext);

  return (
    <div className="productShow">
      {products.map((product) => (
        <ProductUiTemplate key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DrawerProductShow;
