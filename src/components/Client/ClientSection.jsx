import React from "react";
import { Container } from "./Styled-Components/ClientSection-Styled.js";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";
import UserOptions from "./UserOptions";


const ClientSection = () => {
  return (
    <Container>
      <UserProfile />
      <UserOptions />
      <UserMenu />
    </Container>
  );
};

export default ClientSection;
