import React from "react";
import { Container, AttendedCount, InnerContainer, AttendedImage, Image, XImage } from "./Styled-Components/Attendence-Styled.js";
import Icon from "../../assets/Icon.svg";
import Iconx from "../../assets/Iconx.svg";



const Attendence = () => {
  return (
    <Container>
      <AttendedCount>
        Attended <span>5</span>
      </AttendedCount>
      <InnerContainer>
        <AttendedImage>
          <Image src={Icon} alt="attended" />
        </AttendedImage>
        <AttendedImage>
          <Image src={Icon} alt="attended" />
        </AttendedImage>
        <AttendedImage>
          <Image src={Icon} alt="attended" />
        </AttendedImage>
        <AttendedImage>
          <Image src={Icon} alt="attended" />
        </AttendedImage>
        <AttendedImage>
          <XImage src={Iconx} alt="not-attended" />
        </AttendedImage>
      </InnerContainer>
    </Container>
  );
};

export default Attendence;
