import React from "react";
import "./product.css";

const Product = ({
  record: { id, name, price, quantity, cost },
  removeRecord,
}) => {
  const handleRemoveBtn = () => {
    removeRecord(id);
  };

  return (
    <tr className="new group even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 td-counter"></td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </td>
      <td className="currentPrice px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200 text-end">
        {price}
      </td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200">
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            className="active:scale-75 duration-300 decrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4 pointer-events-none"
            >
              <path
                fillRule="evenodd"
                d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="currentQuantity">{quantity}</div>
          <button
            type="button"
            className="active:scale-75 duration-300 incrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4 pointer-events-none"
            >
              <path
                fillRule="evenodd"
                d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-end flex justify-end items-center">
        <button
          onClick={handleRemoveBtn}
          className="delBtn active:scale-75 duration-300 bg-neutral-600 rounded-lg p-1 absolute hidden pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-9 group-hover:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
        <div className="rowTotal">{cost}</div>
      </td>
    </tr>
  );
};

export default Product;
