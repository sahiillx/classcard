import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
`;

export const BalanceText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 4px;
`;
export const BalanceItem = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(209, 213, 219, 1);
  text-decoration: none;
  cursor: pointer;
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;

  cursor: pointer;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  appearance: none;
`;
