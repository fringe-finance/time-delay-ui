import React, { useState } from "react";

import { Header, Footer } from "components";
import { PendingTable } from "components/table";
import {
  SwitchStyled,
  WrapperBody,
  WrapperContent,
  WrapperRadio,
} from "./styled";
import { RadioButton } from "components/radio";
import { DateTimeTab } from "components/tab";
import InputDataDecoder from "ethereum-input-data-decoder";
import { ABI } from "constants/abi-polygon";

const Home: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [filter, setFilter] = useState(1);
  const [value, setValue] = useState();

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  const onChange = () => {
    setChecked(!checked);
    setFilter(!checked ? 1 : 2);
  };

  return (
    <WrapperBody>
      <Header />
      <WrapperContent>
        <h3>Primary Lending Platform - Pending Governance Transactions</h3>
        <WrapperRadio>
          <div className="tab">
            <DateTimeTab />
          </div>
          <div className="tab">
            <RadioButton value={value} onChange={onChangeRadio} />
          </div>
          <div>
            Pending only:
            <SwitchStyled defaultChecked onChange={onChange} />
          </div>
        </WrapperRadio>
        <PendingTable timeType={value} filter={filter} />
      </WrapperContent>
      <Footer />
    </WrapperBody>
  );
};

export default Home;
