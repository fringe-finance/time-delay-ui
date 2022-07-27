import { Radio } from "antd";

export const RadioButton = ({ value, onChange }) => {
  return (
    <Radio.Group onChange={onChange} value={value} defaultValue={"gmt"}>
      <Radio value={"localDateTime"}>Local Date Time</Radio>
      <Radio value={"gmt"}>GMT</Radio>
    </Radio.Group>
  );
};
