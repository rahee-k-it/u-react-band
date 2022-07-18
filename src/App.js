import * as React from 'react';
import { Reset } from 'styled-reset';
import styled from 'styled-components';

const NavBar = styled.div`
  height: 300px;
  background-color: violet;
`;

function App() {
  return (
    <>
      <Reset />
      <NavBar>네브바입니다</NavBar>
    </>
  );
}

export default App;
