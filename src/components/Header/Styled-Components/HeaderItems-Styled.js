import styled from "styled-components";

export const HeaderItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  width: auto;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

export const Item = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 6px;
  margin-right: 20px;
  background-color: ${({ active }) => (active ? "#f3f4f6" : "transparent")};

  &:hover {
    background-color: ${({ active }) => (active ? "#f3f4f6" : "#f9fafb")};
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${({ active }) => (active ? "#000" : "#6b7280")};
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    margin-right: 6px;

    p {
      font-size: 14px;
    }
  }
`;
