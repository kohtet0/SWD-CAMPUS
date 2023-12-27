import React, { useContext } from "react";
import RecordGroup from "./RecordGroup";
import { GeneralContext } from "../contexts/GeneralContext";

const Table = () => {
  const { records } = useContext(GeneralContext);

  const allTotal = records.reduce((pv, cv) => pv + cv.cost, 0);

  return (
    <div className="relative shadow-md rounded-lg mt-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-b-2 border-neutral-500 bg-neutral-300">
            <th className="px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-base border-r">
              id
            </th>
            <th className="px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-base border-r sm:whitespace-nowrap">
              Product name
            </th>
            <th className="px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-base border-r">
              Price
            </th>
            <th className="px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-base border-r">
              Quantity
            </th>
            <th className="px-3 sm:px-6 py-2 sm:py-4 text-center font-bold text-xs sm:text-base">
              Total
            </th>
          </tr>
        </thead>
        <tbody id="tableBody">
          <RecordGroup />
        </tbody>
        <tfoot>
          <tr className="even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700">
            <td
              colSpan="4"
              className="px-3 sm:px-6 py-2 sm:py-3 text-center text-xs sm:text-base font-bold uppercase border-r border-neutral-200"
            >
              Total
            </td>
            <td className="allTotal px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-bold text-end">
              {allTotal}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
