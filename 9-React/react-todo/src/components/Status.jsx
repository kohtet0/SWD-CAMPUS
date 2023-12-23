import React from "react";

const Status = ({ task }) => {
  return (
    <div className="flex justify-between items-center h-10">
      <h3 className="text-xl py-1 font-mono font-semibold align-middle">
        Your List
      </h3>
      <h3 className="text-base py-1 px-3 bg-neutral-600 rounded-full text-neutral-50 font-mono font-semibold">
        Done (
        <span className="done-count">
          {task.filter((el) => el.isDone === true).length}
        </span>{" "}
        / <span className="list-count">{task.length}</span>)
      </h3>
    </div>
  );
};

export default Status;
