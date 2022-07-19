import * as React from 'react';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import Header from './Header';
import Tap from './Tap';

const Button = styled.button`
  background-color: ${({ bgColor }) => `${bgColor ?? 'gray'};`};
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.1s linear;
  opacity: 0.8;
  &:hover {
    color: white;
    opacity: 1;
  }
  &:focus {
    opacity: 1;
    text-decoration: underline;
  }
`;

function App() {
  return (
    <>
      <Reset />
      <Header logo={'U-Band'} />
      <Tap
        bgColor='#1FBB00'
        buttons={
          <>
            <Button bgColor='#1FBB00'>게시글</Button>
            <Button bgColor='#1FBB00'>사진첩</Button>
            <Button bgColor='#1FBB00'>일정</Button>
          </>
        }
      />
    </>
  );
}

export default App;
