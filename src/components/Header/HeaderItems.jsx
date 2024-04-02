import React, { useState } from "react";
import { HeaderItemsWrapper, Item } from "./Styled-Components/HeaderItems-Styled.js";

const HeaderItems = () => {
  const [activeItem, setActiveItem] = useState("Packages");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <HeaderItemsWrapper>
      <Item
        active={activeItem === "Classes"}
        onClick={() => handleItemClick("Classes")}
      >
        <p>Classes</p>
      </Item>
      <Item
        active={activeItem === "One-on-One"}
        onClick={() => handleItemClick("One-on-One")}
      >
        <p>One-on-One</p>
      </Item>
      <Item
        active={activeItem === "Packages"}
        onClick={() => handleItemClick("Packages")}
      >
        <p>Packages</p>
      </Item>
      <Item
        active={activeItem === "Courses"}
        onClick={() => handleItemClick("Courses")}
      >
        <p>Courses</p>
      </Item>
    </HeaderItemsWrapper>
  );
};

export default HeaderItems;
