import React from "react";
import { Container, ScheduleText, InnerContainer, ScheduleItem, TimerImage } from "./Styled-Components/Sheduled-Styled.js";
import Timer from "../../assets/timer.svg";

const Sheduled = () => {
  return (
    <Container>
      <ScheduleText>
        Schedule <span>3</span>
      </ScheduleText>
      <InnerContainer>
        <ScheduleItem>
          <TimerImage src={Timer} alt="timer" />
        </ScheduleItem>
        <ScheduleItem>
          <TimerImage src={Timer} alt="timer" />
        </ScheduleItem>
        <ScheduleItem>
          <TimerImage src={Timer} alt="timer" />
        </ScheduleItem>
      </InnerContainer>
    </Container>
  );
};

export default Sheduled;
