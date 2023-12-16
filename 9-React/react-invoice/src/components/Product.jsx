import React from "react";
import "./product.css";

const Product = () => {
  return (
    <tr className="new group even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 td-counter">
        {/* Content for this cell */}
      </td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        Apple
      </td>
      <td className="currentPrice px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200 text-end">
        1200
      </td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200">
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            className="active:scale-75 duration-300 decrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100"
          >
            {/* SVG content for decrement button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4 pointer-events-none"
            >
              {/* SVG path */}
            </svg>
          </button>
          <div className="currentQuantity">5</div>
          <button
            type="button"
            className="active:scale-75 duration-300 incrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100"
          >
            {/* SVG content for increment button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4 pointer-events-none"
            >
              {/* SVG path */}
            </svg>
          </button>
        </div>
      </td>
      <td className="px-3 sm:px-6 py-2 sm:py-3 text-end flex justify-end items-center">
        <button className="delBtn active:scale-75 duration-300 bg-neutral-600 rounded-lg p-1 absolute hidden pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-9 group-hover:block">
          {/* SVG content for delete button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            {/* SVG path */}
          </svg>
        </button>
        <div className="rowTotal">12125</div>
      </td>
    </tr>
  );
};

export default Product;
