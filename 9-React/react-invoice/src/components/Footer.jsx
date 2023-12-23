import React from "react";

const Footer = ({ handleDrawer }) => {
  return (
    <footer className="mt-auto mx-auto mb-5 container px-5 sm:px-10 flex justify-end">
      <div>
        <button
          type="button"
          onClick={handleDrawer}
          className="text-white bg-gray-800 print:hidden hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          Manage Inventory
        </button>
        <button
          id="printBtn"
          type="button"
          className="text-white bg-gray-800 print:hidden hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          Print
        </button>
      </div>
    </footer>
  );
};

export default Footer;
