import React from "react";

const Form = ({addTask}) => {

  return (
    <div className="my-5 flex justify-center items-center gap-2">
      <input
        className="text-input h-10 border border-neutral-500 w-full outline-0 px-3"
        type="text"
        name=""
        id="inputText"
        onChange={addTask()}
      />
      <button
        className="add-btn w-16 h-10 border border-neutral-500 flex justify-center items-center bg-neutral-600"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Form;
