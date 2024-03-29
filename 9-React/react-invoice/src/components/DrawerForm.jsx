import React, { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const DrawerForm = () => {
  const { addProduct } = useContext(GeneralContext);

  const productNameRef = useRef(null);
  const productPriceRef = useRef(null);

  const handleAddBtn = (event) => {
    event.preventDefault();
    addProduct({
      id: Date.now(),
      name: productNameRef.current.value,
      price: productPriceRef.current.valueAsNumber,
    });
    productNameRef.current.value = "";
    productPriceRef.current.value = "";
  };

  return (
    <form action="#" className="newProductForm">
      <div className=" mt-auto grid grid-cols-12 gap-3">
        <input
          ref={productNameRef}
          type="text"
          id="newProduct"
          name="newProduct"
          className="col-span-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Please enter your new products..."
          required
        />

        <input
          ref={productPriceRef}
          type="number"
          id="price"
          name="price"
          className="col-span-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter product price..."
          required
        />

        <button
          onClick={handleAddBtn}
          type="submit"
          className="col-span-5 w-full h-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          Add New
        </button>
      </div>
    </form>
  );
};

export default DrawerForm;
