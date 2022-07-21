import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import Tap from './Tap';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
`;

const TopHeader = styled.div`
  height: 60px;
  background-color: #21c531;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid green;
  background-color: green;
  align-items: center;
  padding: 0 5px;
  gap: 5px;
`;

const Search = styled.input`
  border: none;
  height: 30px;
  display: flex;
  background-color: transparent;
  color: white;
  &:focus {
    outline: none;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  color: white;
  font-size: 30px;
  gap: 20px;
`;

const Logo = styled.div`
  font-style: inherit;
  font-weight: 900;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  gap: 10px;
`;

const HeaderButton = styled.button`
  background-color: #21c531;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;

const TapButton = styled.button`
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

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FoldingBox = styled.div`
  margin-top: 5px;
  margin-right: 50px;
  position: relative;
  padding: 10px 10px 10px 10px;
  background: white;
  border-radius: 5px;
  border: #7f7f7f solid 1px;
  position: absolute;
  font-size: 16px;
  text-align: left;
  width: 200px;
  height: 100px;
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 10px 15px 10px;
    border-color: white transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -15px;
    right: 20px;
  }
  &:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 10px 15px 10px;
    border-color: #7f7f7f transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -16.5px;
    right: 20px;
  }
`;

const Profile = styled.div`
  height: 30px;
  width: 30px;
  background-color: #b9b7b7;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;

function Header({ logo, buttons, foldableContent }) {
  const [foldingBoxOpened, setFoldingBoxOpened] = useState(false);
  return (
    <HeaderContainer>
      <TopHeader>
        <LogoBox>
          <Logo>{logo}</Logo>
          <SearchBox>
            <Search />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='sm' opacity='0.7' cursor='pointer' />
          </SearchBox>
        </LogoBox>

        <ButtonBox>
          {buttons}
          <HeaderButton
            onClick={() => {
              setFoldingBoxOpened(!foldingBoxOpened);
            }}
          >
            <FontAwesomeIcon icon={faBell} size='lg' color='white' />
          </HeaderButton>
          <Profile>
            <FontAwesomeIcon icon={faUser} color='white' />
          </Profile>
        </ButtonBox>
      </TopHeader>
      {foldingBoxOpened ? (
        <Flex>
          <FoldingBox>{foldableContent}</FoldingBox>{' '}
        </Flex>
      ) : (
        ''
      )}
      <Tap
        bgColor='#1FBB00'
        buttons={
          <>
            <Link to='/'>
              <TapButton bgColor='#1FBB00'>게시글</TapButton>
            </Link>
            <Link to='/album'>
              <TapButton bgColor='#1FBB00'>사진첩</TapButton>
            </Link>
            <Link to='/calendar'>
              <TapButton bgColor='#1FBB00'>일정</TapButton>
            </Link>
          </>
        }
      />
    </HeaderContainer>
  );
}

export default Header;
