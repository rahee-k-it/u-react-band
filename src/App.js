import * as React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import WriteContent from "./Components/Nav/WriteContent";
import { useRecoilValue } from "recoil";
import { clickWriteAtom, darkAtom } from "./atom";

const NavBar = styled.div`
  height: 100px;
  background-color: violet;
`;

const Div = styled.div`
  height: 200vh;
  opacity: ${(props) => props.isDark ?? 1};
  width: 100%;
  background-color: #f5f8fa;
`;

const NavBox = styled.div`
  margin-top: 100px;
  height: 100%;
  width: 33%;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  padding: 20px 15px;
  z-index: 1;
`;

function App() {
  const clickWrite = useRecoilValue(clickWriteAtom);
  const isDark = useRecoilValue(darkAtom);
  console.log(isDark);
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
    </>
  );
}

export default App;
