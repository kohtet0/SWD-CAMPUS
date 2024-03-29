import React, { useState } from "react";

const Accordion = ({ id, q, ans, isOpen, openAccordion }) => {
  // const [open, setOpen] = useState(true);

  // const openHandler = () => {
  //   setOpen(!open);
  // };
  return (
    <div className=" border border-gray-400">
      <div
        onClick={() => openAccordion(id)}
        className=" bg-gray-200 p-3 flex justify-between select-none cursor-pointer"
      >
        <h4>{q}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 duration-200 ${!open && " rotate-180"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      {isOpen && (
        <div className={`p-4`}>
          <p>{ans}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
