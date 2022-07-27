import axios from "axios";
import { useEffect, useState } from "react";

export const TestTable = (id) => {
  const [func, setFunc] = useState<String>();

  useEffect(() => {
    const getData = async (id) => {
      const res = await axios.get(process.env.REACT_APP_METHOD_DECODE + id?.id);
      setFunc(res?.data?.result?.function[id?.id][0]?.name);
    };
    getData(id);
  }, []);

  return <>{func?.split("(")[0] || "loading..."}</>;
};
