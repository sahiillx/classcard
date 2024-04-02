import React from "react";
import { Container, InnerContainer } from "./Styled-Components/Booking-Shedule-Styled.js";
import Balance from "./Balance";
import Sheduled from "./Sheduled";
import Attendence from "./Attendence";


const BookingShedule = () => {
  return (
    <Container>
      <InnerContainer>
        <Balance />
        <Sheduled />
        <Attendence />
      </InnerContainer>
    </Container>
  );
};

export default BookingShedule;
