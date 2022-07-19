import * as React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";

const NavBar = styled.div`
  height: 300px;
  background-color: violet;
  position: absolute;
  top: 0px;
`;

//삭제할 예정
const Div = styled.div`
  height: 200vh;
`;

const NavBox = styled.div`
  margin-top: 300px;
  background-color: #f5f8fa;
  height: 100%;
  width: 33%;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Reset />
      <Div>
        <NavBar>네브바입니다.</NavBar>
        <NavBox>
          <Nav />
        </NavBox>
      </Div>
    </>
  );
}

export default App;
