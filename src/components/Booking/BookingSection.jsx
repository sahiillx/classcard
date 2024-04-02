import React from "react";
import { Container, Title, InnerContainer, IconWrapper, Image, ContentWrapper } from "./Styled-Components/Booking-Secs-Styled.js";
import Clipboard from "../../assets/clipboard.svg";
import BookingHeading from "./BookingHeading";
import BookingDescription from "./BookingDescription";
import BookingShedule from "./BookingShedule";



const BookingSection = () => {
  return (
    <Container>
      <Title>My bookings</Title>
      <InnerContainer>
        <IconWrapper>
          <Image src={Clipboard} alt="clipboard" />
        </IconWrapper>
        <ContentWrapper>
          <BookingHeading />
          <BookingDescription />
          <BookingShedule />
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
};

export default BookingSection;
