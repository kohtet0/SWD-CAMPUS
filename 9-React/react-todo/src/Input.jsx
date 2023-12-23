import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("hello");
  console.log(text);

  const setValue = (event) => {
    setText(event.target.value)
  };

  return (
    <div>
      <label htmlFor="input" className="text-2xl font-serif font-bold">
        input
      </label>
      <br />
      <input
        onChange={setValue}
        className="mt-5 border-2 border-red-500 p-3 rounded-full"
        id="input"
        type="text"
      />

      <p>{text}</p>
    </div>
  );
};

export default Input;
