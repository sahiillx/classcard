import React, { useState } from "react";
import { MenuContainer, MenuItem, Image } from "./Styled-Components/UserMenu-Styled.js";
import Calendar from "../../assets/Calendar.png";
import Cursor from "../../assets/Cursor click.png";
import Hand from "../../assets/Hand.png";
import Dollar from "../../assets/Currency Dollar.png";
import Folder from "../../assets/Folder.png";
import OFolder from "../../assets/Folder open.png";
import Grade from "../../assets/Chart bar.png";



const UserMenu = () => {
  const [activeItem, setActiveItem] = useState("My bookings");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <MenuContainer>
      <MenuItem
        active={activeItem === "My calender"}
        onClick={() => handleItemClick("My calender")}
      >
        <Image src={Calendar} alt="option-img" />
        <p>My calender</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "My bookings"}
        onClick={() => handleItemClick("My bookings")}
      >
        <Image src={Cursor} alt="option-img" />
        <p>My bookings</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "Attendence history"}
        onClick={() => handleItemClick("Attendence history")}
      >
        <Image src={Hand} alt="option-img" />
        <p>Attendence history</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "Billing history"}
        onClick={() => handleItemClick("Billing history")}
      >
        <Image src={Dollar} alt="option-img" />
        <p>Billing history</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "My files"}
        onClick={() => handleItemClick("My files")}
      >
        <Image src={Folder} alt="option-img" />
        <p>My files</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "My courses"}
        onClick={() => handleItemClick("My courses")}
      >
        <Image src={OFolder} alt="option-img" />
        <p>My courses</p>
      </MenuItem>
      <MenuItem
        active={activeItem === "Grades"}
        onClick={() => handleItemClick("Grades")}
      >
        <Image src={Grade} alt="option-img" />
        <p>Grades</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default UserMenu;
