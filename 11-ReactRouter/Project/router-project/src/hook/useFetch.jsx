import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: data,
  });

  const useFetch = (fetchFun, arg) => {
    useEffect(() => {
      (async () => {
        const res = await fetchFun(arg);
        console.log(res);
      })();
    }, []);
  };

  return;
};

export default useFetch;
