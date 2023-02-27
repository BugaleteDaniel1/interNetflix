import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      };
      getData();
    } catch (error) {
      throw new Error(error);
    }
  }, [url]);
  return [data];
};
