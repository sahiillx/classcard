import React from "react";
import { BookingDetails, SubTitle, ActionWrapper, ActionButton, Image, ActionText } from "./Styled-Components/Booking-Heading-Styled.js";
import { DownloadIcon } from "../../assets";



const BookingHeading = () => {
  return (
    <>
      <BookingDetails>
        <SubTitle>Graphic design (full course)</SubTitle>
        <ActionWrapper>
          <ActionButton>
            <Image src={DownloadIcon} alt="download-icon" />
            <ActionText>Invoice PDF</ActionText>
          </ActionButton>
          <ActionButton>
            <Image src={DownloadIcon} alt="download-icon" />
            <ActionText>Receipt PDF</ActionText>
          </ActionButton>
        </ActionWrapper>
      </BookingDetails>
    </>
  );
};

export default BookingHeading;
