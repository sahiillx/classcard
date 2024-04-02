import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1007px;
  max-height: 380px;
  margin: 34px 0px 0px 36px;

  @media (max-width: 768px) {
    width: 95%;
    align-items: center;
    margin-top: 10px;
    margin: auto;
  }
`;

export const Title = styled.h1`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  width: 111px;
  height: 28px;
  margin: 20px 0px;
  color: gray/900;
`;
export const InnerContainer = styled.div`
  display: flex;

  background: white;
  border-radius: 6px;
  gap: 20px;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;

  cursor: pointer;
  margin: 12px 0px 0px 12px;
`;

export const Image = styled.img`
  background-color: #f3f4f6;
  border-radius: 6px;
  padding: 15px 14px 15px 14px;
  height: 22px;
  width: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px; //
`;