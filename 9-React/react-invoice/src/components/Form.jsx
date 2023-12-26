import React, { useRef } from "react";

const Form = ({ products, addRecord }) => {
  const addRecordFormRef = useRef();
  const idRef = useRef();
  const quantityRef = useRef();

  const recordAddBtn = (event) => {
    event.preventDefault();

    // console.log(idRef.current.value, quantityRef.current.valueAsNumber);
    const currentProduct = products.find(
      (product) => product.id === parseInt(idRef.current.value)
    );

    const cost = currentProduct.price * quantityRef.current.valueAsNumber;

    const newRecord = {
      id: Date.now(),
      productId: idRef.current.value,
      name: currentProduct.name,
      price: currentProduct.price.toFixed(2),
      quantity: quantityRef.current.valueAsNumber,
      cost: parseInt(cost.toFixed(2)),
    };

    addRecord(newRecord);

    addRecordFormRef.current.reset();
  };

  return (
    <form
      action=""
      id="addRecordForm"
      ref={addRecordFormRef}
      className="print:hidden"
    >
      <div className="grid grid-cols-5 gap-3">
        {/* select box */}
        <select
          id="formSelect"
          ref={idRef}
          name="formSelect"
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        >
          <option>Choose a fruit</option>
          {products.map(({ id, name }) => (
            <option value={id} product-id={id} key={id}>
              {name}
            </option>
          ))}
        </select>

        {/* number input */}
        <input
          type="number"
          id="formInput"
          ref={quantityRef}
          name="formInput"
          aria-describedby="helper-text-explanation"
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Please enter quantity..."
          required
        />

        {/* add button */}
        <button
          id="addBtn"
          onClick={recordAddBtn}
          name="addBtn"
          type="submit"
          className="active:scale-90 duration-300 w-full h-full text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
