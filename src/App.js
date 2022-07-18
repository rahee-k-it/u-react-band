import * as React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";

const Nav = styled.div`
  background-color: teal;
  width: 400px;
  margin-top: 300px;
`;

function App() {
  return (
    <>
      <Reset />
      <Nav>Hi</Nav>
      <div className="App">
        <h1>새로운 레퍼지토리</h1>
      </div>
    </>
  );
}

export default App;
