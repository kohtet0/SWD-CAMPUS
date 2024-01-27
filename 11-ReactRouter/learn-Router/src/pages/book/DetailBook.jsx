import React from "react";
import { useParams } from "react-router-dom";

const DetailBook = () => {
  const data = useParams();
  return <div>DetailBook is {data.name}</div>;
};

export default DetailBook;
