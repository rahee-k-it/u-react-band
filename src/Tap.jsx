import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  ${(props) => `background-color: ${props.bgColor ?? 'grey'};`}
  display: flex;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  gap: 50px;
`;

function Tap({ bgColor, buttons }) {
  return (
    <div>
      <Container bgColor={bgColor}>
        <ButtonBox>{buttons}</ButtonBox>
      </Container>
    </div>
  );
}

export default Tap;
