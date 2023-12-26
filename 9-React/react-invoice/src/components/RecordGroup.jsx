import React from "react";
import Empty from "./Empty";
import Product from "./Product";

const RecordGroup = ({ records, removeRecord }) => {
  return (
    <>
      {records.length === 0 && <Empty />}
      {records.map((record) => (
        <Product key={record.id} record={record} removeRecord={removeRecord} />
      ))}
    </>
  );
};

export default RecordGroup;
