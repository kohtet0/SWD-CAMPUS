import React, { useState } from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = ({task}) => {
  return (
    <div id="listGroup" className="list-group mt-3 font-mono box-border">
      <EmptyState />

      {task.map(({ id, job, isDone }) => (
        <List key={id} id={id} job={job} isDone={isDone} />
      ))}
    </div>
  );
};

export default ListGroup;
