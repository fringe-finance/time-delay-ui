import { Radio } from "antd";
import { useState } from "react";

export const DateTimeTab = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      defaultValue="currentDateTime"
      buttonStyle="solid"
    >
      <Radio.Button value="currentDateTime">Current Date time</Radio.Button>
      <Radio.Button value="currentTimeDelay">Current time delay</Radio.Button>
    </Radio.Group>
  );
};
