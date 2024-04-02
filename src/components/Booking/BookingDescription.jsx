import React from "react";
import { DetailsContainer, DetailItem, DetailTitle, DetailDescription } from "./Styled-Components/Booking-Desc-Styled.js";



const BookingDescription = () => {
  return (
    <DetailsContainer>
      <DetailItem>
        <DetailTitle>Subject</DetailTitle>
        <DetailDescription>Design for intermediates - L1</DetailDescription>
      </DetailItem>
      <DetailItem>
        <DetailTitle>Sessions</DetailTitle>
        <DetailDescription>10 sessions</DetailDescription>
      </DetailItem>
      <DetailItem>
        <DetailTitle>Invoice</DetailTitle>
        <DetailDescription>13</DetailDescription>
      </DetailItem>
      <DetailItem>
        <DetailTitle>Valid till</DetailTitle>
        <DetailDescription>Feb 15, 2024 (23 days left)</DetailDescription>
      </DetailItem>
    </DetailsContainer>
  );
};

export default BookingDescription;
