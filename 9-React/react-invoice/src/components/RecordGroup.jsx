import React, { useContext } from "react";
import Empty from "./Empty";
import Product from "./Product";
import { GeneralContext } from "../contexts/GeneralContext";

const RecordGroup = () => {
  const { records, removeRecord } = useContext(GeneralContext);

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
