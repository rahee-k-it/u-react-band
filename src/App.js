import * as React from 'react';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import Header from './Header';
import Tap from './Tap';
import { Routes, Route } from 'react-router-dom';

const FlexPage = styled.div`
  display: flex;
  justify-content: end;
`;

const Page = styled.div`
  height: 1000px;
  width: 1200px;
  background-color: ${({ bgColor }) => `${bgColor ?? 'gray'};`};
  border: 1px solid black;
`;

// const HeaderContainer = styled.div`
//   position: sticky;
//   top: 0px;
// `;

function App() {
  return (
    <>
      <Reset />
      {/* <HeaderTapBox> */}
      <Header logo={'U-Band'} />
      {/* <Tap
        bgColor='#1FBB00'
        buttons={
          <>
            <Link to='/'>
              <Button bgColor='#1FBB00'>게시글</Button>
            </Link>
            <Link to='/album'>
              <Button bgColor='#1FBB00'>사진첩</Button>
            </Link>
            <Link to='/calendar'>
              <Button bgColor='#1FBB00'>일정</Button>
            </Link>
          </>
        }
      /> */}
      {/* </HeaderTapBox> */}

      <Routes>
        <Route
          path='/'
          element={
            <FlexPage>
              <Page bgColor='#E6F0EF'>메인이다 높이:600px 너비:1200px</Page>
            </FlexPage>
          }
        />
        <Route
          path='/album'
          element={
            <FlexPage>
              <Page bgColor='#A9C5B9'>앨범이다 높이:600px 너비:1200px</Page>
            </FlexPage>
          }
        />
        <Route
          path='/calendar'
          element={
            <FlexPage>
              <Page bgColor='#DBD2D1'>일정이다 높이:600px 너비:1200px</Page>
            </FlexPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
