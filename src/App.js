import * as React from "react";
import { Reset } from "styled-reset";
import styled from "styled-components";
import Nav from "./Components/Nav/Nav";
import WriteContent from "./Components/Nav/WriteContent";
import { useRecoilValue } from "recoil";
import { clickAtom, darkAtom } from "./atom";

const NavBar = styled.div`
  height: 300px;
  background-color: violet;
  position: absolute;
  z-index: 2;
  top: 0px;
`;
//삭제할 예정
const Div = styled.div`
  height: 200vh;
  opacity: ${(props) => props.isDark ?? 1};
  width: 100%;
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
  padding: 20px 15px;
  z-index: 1;
`;

function App() {
  const clicked = useRecoilValue(clickAtom);
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
      {clicked ? <WriteContent /> : ""}
    </>
  );
}

export default App;
