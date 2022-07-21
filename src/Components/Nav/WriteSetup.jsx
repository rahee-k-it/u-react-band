import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickSetupAtom, darkWriteBoxAtom } from "../../atom";
import { useState } from "react";
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  left: 580px;
  top: 180px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  text-align: center;
  padding: 10px 0px;
  font-weight: 900;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px;
  padding: 10px 0px;
  font-size: 13px;
  &:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    span {
      &:last-child {
        opacity: 0.4;
        font-size: 12px;
        margin-top: 3px;
      }
    }
  }

  svg {
    ${(props) => props.color ?? "gray"}
    width: 20px;
    height: 20px;
    font-size: 17px;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  height: 30px;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: none;
    margin: 0px 5px;
    padding: 7px 20px;
    color: rgba(0, 0, 0, 0.5);
    &:first-child {
      background-color: white;
    }
    &:last-child {
      background-color: #2a3038;
      color: white;
    }
  }
`;
function WriteSetup() {
  const [clickSetup, setClickSetup] = useRecoilState(clickSetupAtom);
  const setIsDarkBox = useSetRecoilState(darkWriteBoxAtom);

  const [click, setClick] = useState(true);

  const onClickToggle = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const onClickSetup = () => {
    setClickSetup(!clickSetup);
    setIsDarkBox((dark) => (dark === 1 ? 0.5 : 1));
  };

  return (
    <>
      <Wrapper>
        <Title>글쓰기 설정</Title>
        <form>
          <Li>
            <span>공지로 등록</span>
            <FontAwesomeIcon
              onClick={onClickToggle}
              icon={click ? faToggleOff : faToggleOn}
              color={click ? "gray" : "#21c531"}
            />
          </Li>
          <Li>
            <div>
              <span>예약시간 설정</span>
              <span>예약글은 30개까지 등록할 수 있습니다.</span>
            </div>
            <FontAwesomeIcon icon={faToggleOff} color={faToggleOff ? "gray" : "#21c531"} />
          </Li>
          <Li>
            <div>
              <span>저장 허용</span>
              <span>게시글 다른 밴드에 올리기와 사진, 동영상 저장을 허용합니다.</span>
            </div>
            <FontAwesomeIcon icon={faToggleOn} color={faToggleOn ? "#21c531" : "gray"} />
          </Li>
          <Li>
            <span>댓글 사용</span>
            <FontAwesomeIcon icon={faToggleOn} color={faToggleOn ? "#21c531" : "gray"} />
          </Li>
          <Buttons>
            <button onClick={onClickSetup}>취소</button>
            <button>확인</button>
          </Buttons>
        </form>
      </Wrapper>
    </>
  );
}
export default WriteSetup;
