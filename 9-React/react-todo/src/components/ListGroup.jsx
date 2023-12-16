import React from "react";
import EmptyState from "./EmptyState";
import List from "./List";

const ListGroup = () => {
  return (
    <div id="listGroup" className="list-group mt-3 font-mono box-border">
      <EmptyState />
      <List />
    </div>
  );
};

export default ListGroup;
