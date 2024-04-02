import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-wrap: wrap;
`;

export const AttendedCount = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(0, 134, 56, 1);

  span {
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: rgba(0, 134, 56, 1);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const AttendedImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(209, 250, 229, 1);

  border-radius: 4px;
  border: 1px solid rgba(110, 231, 183, 1);
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 10.99px;
  height: 79px;
  top: 4.5px;
  left: 3.51px;
  gap: 0px;
  opacity: 0px;
`;

export const XImage = styled.img`
  width: 10px;
  height: 10px;
  top: 5px;
  left: 5px;
  gap: 0px;
  border: 1.5px 0px 0px 0px;
  opacity: 0px;
`;