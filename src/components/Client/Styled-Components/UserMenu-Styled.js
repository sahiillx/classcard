import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const MenuItem = styled.div`
  width: 258px;
  height: 26px;
  border-radius: 6px;
  padding: 8px 12px 8px 8px;
  color: rgba(75, 85, 99, 1);

  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${({ active }) => (active ? "#e5e7eb" : "transparent")};

  &:hover {
    background-color: #e5e7eb;
    border-radius: 4px;
  }

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
  }
`;

export const Image = styled.img``;
