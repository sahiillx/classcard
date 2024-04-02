import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-wrap: wrap;
`;

export const ScheduleText = styled.p`
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
export const ScheduleItem = styled.div`
  display: flex;
  gap: 0.25rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem;
  cursor: pointer;
`;

export const TimerImage = styled.img`
  width: 16px;
  height: 16px;
`;