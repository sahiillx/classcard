import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 80px;
  justify-content: center;

  gap: 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 15px;
    gap: 15px;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const LogoImage = styled.img`
  height: 32px;
  width: 35px;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
`;
export const Image = styled.img`
  height: auto;
  width: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
`;
export const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  width: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const UserName = styled.div`
  margin-left: 6px;
  font-size: 16px;
  font-weight: 500;
`;
export const BorderLine = styled.div`
  width: 100%;
  border: 1px solid #e5e7eb;
`;
