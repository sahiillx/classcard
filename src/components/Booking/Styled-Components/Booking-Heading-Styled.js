import styled from "styled-components";

export const BookingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 12px 12px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SubTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const Image = styled.img`
  margin: 9px 8px 9px 15px;
`;
export const ActionWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 6px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 0px;
  }
`;
export const ActionText = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
  color: grey/900;
  padding-right: 15px;
`;