import * as React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";

const Nav = styled.div`
  margin-top: 300px;
  background-color: teal;
`;

const NavBar = styled.div`
  height: 300px;
  background-color: violet;
  position: absolute;
  top: 0px;
`;

function App() {
  return (
    <>
      <Reset />
      <NavBar>네브바입니다.</NavBar>
      <Nav>Nav</Nav>
    </>
  );
}

export default App;
