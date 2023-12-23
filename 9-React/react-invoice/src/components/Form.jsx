import React from "react";

const Form = ({ products }) => {
  return (
    <form action="" id="addRecordForm" className="print:hidden">
      <div className="grid grid-cols-5 gap-3">
        {/* select box */}
        <select
          id="formSelect"
          name="formSelect"
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          required
        >
          <option>Choose a fruit</option>
          {products.map((product) => (
            <option key={product.id}> {product.name}</option>
          ))}
        </select>

        {/* number input */}
        <input
          type="number"
          id="formInput"
          name="formInput"
          aria-describedby="helper-text-explanation"
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Please enter quantity..."
          required
        />

        {/* add button */}
        <button
          id="addBtn"
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
