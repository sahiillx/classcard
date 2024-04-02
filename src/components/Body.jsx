import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import MainComponent from "./MainComponents";

const Container = styled.div`
  background-color: #f3f4f6;
  height: 100%;
  min-height: 100vh;
  
`;

const Body = () => {
  return (
    <Container>
      <Header />
      <MainComponent />
    </Container>
  );
};

export default Body;
