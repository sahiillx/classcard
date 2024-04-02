import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px 0px 34px 81px;
  max-width: 308px;
  width: 100%;
  max-height: 578px;
  height: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 20px;
  }
`;
