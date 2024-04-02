import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f4f6;
  max-width: 903px;

  max-height: 164px;
  height: 100vh;
  padding: 8px 2px 8px 8px;
  border-radius: 4px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    padding: 8px 2px 8px 8px;
    width: 90%;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
