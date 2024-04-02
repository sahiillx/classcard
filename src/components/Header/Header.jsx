import React from "react";
import {Container, HeaderWrapper, LogoImage, IconsWrapper, Wrapper, Image, UserWrapper, UserName, BorderLine} from "./Styled-Components/Header-Styled.js";

import HeaderItems from "../Header/HeaderItems";
import Logo from "../../assets/logo.svg";
import Chat from "../../assets/chat.svg";
import Cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import ChevronDown from "../../assets/chevron-down.svg";

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <LogoImage src={Logo} alt="logo" />
        <IconsWrapper>
          <Wrapper>
            <Image src={Chat} alt="chat" />
            <Image src={Cart} alt="cart" />
          </Wrapper>

          <UserWrapper>
            <Image src={user} alt="user" />
            <UserName>Tom Cook</UserName>
            <Image src={ChevronDown} alt="chevron-down" />
          </UserWrapper>
        </IconsWrapper>
      </HeaderWrapper>

      <BorderLine />
      <HeaderItems />
    </Container>
  );
};

export default Header;
