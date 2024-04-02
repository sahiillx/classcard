import React from "react";
import {Container, BalanceText, InnerContainer, BalanceItem, CheckboxInput} from "./Styled-Components/Balance-Styled.js";


const Balance = () => {
  return (
    <Container>
      <BalanceText>
        Balance <span style={{ fontWeight: "600" }}>6</span>
      </BalanceText>
      <InnerContainer>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
        <BalanceItem>
          <CheckboxInput type="checkbox" />
        </BalanceItem>
      </InnerContainer>
    </Container>
  );
};

export default Balance;
