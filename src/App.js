import * as React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import WriteContent from "./Components/Nav/WriteContent";
import { useRecoilValue } from "recoil";
import { clickSetupAtom, clickWriteAtom, darkAtom } from "./atom";
import WriteSetup from "./Components/Nav/WriteSetup";

const NavBar = styled.div`
  height: 100px;
  background-color: violet;
`;

const Div = styled.div`
  height: 200vh;
  opacity: ${(props) => props.isDark ?? 1};
  top: 0px;
  width: 100%;
`;

const NavBox = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 430px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 20px 15px;
`;

function App() {
  const clickWrite = useRecoilValue(clickWriteAtom);
  const isDark = useRecoilValue(darkAtom);
  const clickSetup = useRecoilValue(clickSetupAtom);
  return (
    <>
      <Reset />
      <Div isDark={isDark}>
        <NavBar>네브바입니다.</NavBar>
        <NavBox>
          <Nav />
        </NavBox>
      </Div>
      {clickWrite ? <WriteContent /> : ""}
      {clickSetup ? <WriteSetup /> : ""}
    </>
  );
}

export default App;
