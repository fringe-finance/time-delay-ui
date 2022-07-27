import { useEffect, useState } from "react";
import InputDataDecoder from "ethereum-input-data-decoder";
import { ABI } from "constants/abi-polygon";

export const ParamColumn = (method) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    void (() => {
      if (method) {
        const decoder = new InputDataDecoder(ABI);
        const result = decoder.decodeData(method.method);
        setData(result?.inputs);
      }
    })();
  }, [method]);

  console.log({ data });

  return <>{+data[0]}</>;
};
