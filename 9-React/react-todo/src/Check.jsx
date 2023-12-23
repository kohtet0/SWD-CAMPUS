import React, { useState } from "react";

const Check = () => {
  const [check, setCheck] = useState(false);

  const checked = () => {
    setCheck(!check);
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <input
        className="w-5 h-5"
        type="checkbox"
        name=""
        id="check"
        checked={check}
        onChange={checked}
      />
      <label className="text-3xl select-none font-mono" htmlFor="check">
        Check
      </label>
    </div>
  );
};

export default Check;
