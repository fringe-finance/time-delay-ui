import { Switch } from "antd";
import styled from "styled-components";

export const SwitchStyled = styled(Switch)`
  width: 30px;
  margin-left: 10px;
  margin-top: 0px;
`;

export const WrapperRadio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
    div {
      margin-bottom: 10px;
    }
  }
`;

export const WrapperContent = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
