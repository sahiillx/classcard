import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const DetailTitle = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgba(107, 114, 128, 1);
`;

export const DetailDescription = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: grey/900;
`;