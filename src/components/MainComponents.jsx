import React from "react";
import ClientSection from "./Client/ClientSection";
import BookingSection from "./Booking/BookingSection";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }
`;

const MainComponents = () => {
  return (
    <Container>
      <ClientSection />
      <BookingSection />
    </Container>
  );
};

export default MainComponents;
