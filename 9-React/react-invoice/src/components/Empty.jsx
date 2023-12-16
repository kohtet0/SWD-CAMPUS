import React from "react";

const Empty = () => {
  return (
    <tr className="hidden last:table-row even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
      <td
        colSpan="5"
        className="px-3 sm:px-6 py-2 sm:py-4 text-center border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        There is no data! Please add...
      </td>
    </tr>
  );
};

export default Empty;
