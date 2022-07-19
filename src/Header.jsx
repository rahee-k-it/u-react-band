import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 50px;
  background-color: #1abc9c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid green;
  /* background-color: green; */
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

const Button = styled.button`
  background-color: #1abc9c;
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

// const FoldingBox = styled.div`
//   position: absolute;
//   right: 10px;
//   z-index: 1;
//   width: 300px;
//   min-height: 400px;
//   background-color: white;
//   margin: 10px;
//   border-radius: 5px;
//   box-shadow: 2px 2px 5px gray;
//   padding: 10px;
//   border: 1px solid #eee;
// `;

const FoldingBox = styled.div`
  position: relative;
  margin: 50px;
  padding: 20px;
  width: 200px;
  height: 60px;
  color: #fff;
  border-radius: 10px;
  background-color: #ff7979;
  :after {
    content: '';
    position: absolute;
    top: -40px;
    right: 100px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid #ff7979;
  }
`;

function Header({ logo, buttons, foldableContent }) {
  const [foldingBoxOpened, setFoldingBoxOpened] = useState(false);
  return (
    <div>
      <Container>
        <LogoBox>
          {logo}
          <SearchBox>
            <Search />
            <FontAwesomeIcon icon={faMagnifyingGlass} color='white' size='sm' opacity='0.7' cursor='pointer' />
          </SearchBox>
        </LogoBox>

        <ButtonBox>
          {buttons}
          <Button
            onClick={() => {
              setFoldingBoxOpened(!foldingBoxOpened);
            }}
          >
            <FontAwesomeIcon icon={faBell} size='lg' color='white' />
          </Button>
        </ButtonBox>
      </Container>
      {foldingBoxOpened ? <FoldingBox>{foldableContent}</FoldingBox> : ''}
    </div>
  );
}

export default Header;
