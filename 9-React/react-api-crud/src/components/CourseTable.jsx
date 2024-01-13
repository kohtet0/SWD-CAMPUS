import React from "react";
import RowGroup from "./RowGroup";

const CourseTable = () => {
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 border-b-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-5">
                #
              </th>
              <th scope="col" className="px-6 py-3 w-80">
                Course Title
              </th>
              <th scope="col" className="px-6 py-3 w-48">
                Short Name
              </th>
              <th scope="col" className="px-6 py-3 text-end w-44">
                Course Fee
              </th>
              <th scope="col" className="px-6 py-3 text-end w-20">
                Actions
              </th>
            </tr>
          </thead>
          <tbody id="rowGroup">
            <RowGroup />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CourseTable;
