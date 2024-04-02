import React from "react";
import { OptionContainer, OptionItem, Image, OptionTitle } from "./Styled-Components/UserOptions-Styled.js";
import Switch from "../../assets/switch.png";
import Pencil from "../../assets/Pencil.png";




const UserOptions = () => {
  return (
    <OptionContainer>
      <OptionItem>
        <Image src={Switch} alt="client-image" />
        <OptionTitle>Switch Organization</OptionTitle>
      </OptionItem>
      <OptionItem>
        <Image src={Pencil} alt="client-image" />
        <OptionTitle>Edit Profile</OptionTitle>
      </OptionItem>
    </OptionContainer>
  );
};

export default UserOptions;
