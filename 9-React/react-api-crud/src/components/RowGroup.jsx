import React, { useContext, useEffect, useState } from "react";
import Empty from "./Empty";
import Loader from "./Loader";
import Row from "./Row";
import { dataContext } from "../contexts/DataContext";

const RowGroup = () => {
  const { courses, setCourse } = useContext(dataContext); // data received from context api
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const dataCourse = async () => {
      const res = await fetch("http://localhost:5173/api/courses");
      const json = await res.json();
      setCourse(json);
      setReady(!ready);
    };

    dataCourse();
  }, []);
  const arr = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      {!ready && arr.map((arr, index) => <Loader key={index} />)}
      {ready && courses.length
        ? courses.map((course) => <Row key={course.id} course={course} />)
        : ready && <Empty />}
    </>
  );
};

export default RowGroup;
