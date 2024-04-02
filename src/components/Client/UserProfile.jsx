import React from "react";
import {Container, UserDetailsWrapper, ClientImage, UserDetailsText, ClientName, ClientEmail, SettingsIcon} from "./Styled-Components/UserProfile-Styled.js";
import Frame from "../../assets/Frame.png";
import Client from "../../assets/client.svg";



const UserProfile = () => {
  return (
    <Container>
      <UserDetailsWrapper>
        <ClientImage src={Client} alt="client" />
        <UserDetailsText>
          <ClientName>Suraj Telreja</ClientName>
          <ClientEmail>surajvtalreja@gmail.com</ClientEmail>
        </UserDetailsText>
        <SettingsIcon src={Frame} alt="settings" />
      </UserDetailsWrapper>
    </Container>
  );
};

export default UserProfile;
