import * as React from 'react';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import Header from './Header';

const NavBar = styled.div`
  height: 300px;
  background-color: violet;
`;

function App() {
  return (
    <>
      <Reset />
      <Header logo='U-Band' />
    </>
  );
}

export default App;
