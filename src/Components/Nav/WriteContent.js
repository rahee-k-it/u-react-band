import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faB,
  faItalic,
  faUnderline,
  faHeading,
  faStrikethrough,
  faImage,
  faCirclePlay,
  faVideo,
  faPaperclip,
  faCalendarDays,
  faEllipsisH,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickAtom, darkAtom } from "../../atom";

const WriteContentBox = styled.div`
  width: 600px;
  box-sizing: border-box;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 520px;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-weight: 900;
  span {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  position: absolute;
  right: 10px;
  opacity: 0.6;
  font-size: 25px;
`;

const Main = styled.div`
  margin: 10px 10px;
  height: 75%;
  box-sizing: border-box;
`;

const MainHeader = styled.div`
  background-color: #f5f8fa;
  box-sizing: border-box;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  svg {
    cursor: pointer;
    margin: 0px 15px;
  }
`;

const MainContent = styled.input`
  margin: 20px 10px;
  padding-bottom: 160px;
  width: 95%;
  border: none;
  padding-top: 10px;
  :focus {
    outline: none;
  }
`;

const MainFooter = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin: 0px 10px;
  }
`;

const Footer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  div {
    svg {
      margin-right: 10px;
    }
  }
  button {
    border: none;
    opacity: 0.8;
    background-color: gray;
    color: white;
    padding: 10px 40px;
  }
`;
function WriteContent() {
  const setIsdark = useSetRecoilState(darkAtom);
  const [clicked, setClicked] = useRecoilState(clickAtom);
  const onClick = () => {
    setClicked(!clicked);
    setIsdark((dark) => (dark === 1 ? 0.5 : 1));
  };
  return (
    <>
      <WriteContentBox>
        <Header>
          <span>글쓰기</span>
          <Button onClick={onClick}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </Header>
        <Main>
          <form>
            <MainHeader>
              <FontAwesomeIcon icon={faB} />
              <FontAwesomeIcon icon={faItalic} />
              <FontAwesomeIcon icon={faUnderline} />
              <FontAwesomeIcon icon={faHeading} />
              <FontAwesomeIcon icon={faStrikethrough} />
            </MainHeader>

            <MainContent placeholder="새로운 소식을 남겨보세요."></MainContent>
            <MainFooter>
              <FontAwesomeIcon icon={faImage} />
              <FontAwesomeIcon icon={faCirclePlay} />
              <FontAwesomeIcon icon={faVideo} />
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faCalendarDays} />
              <FontAwesomeIcon icon={faImage} />
              <FontAwesomeIcon icon={faCirclePlay} />
              <FontAwesomeIcon icon={faVideo} />
              <FontAwesomeIcon icon={faPaperclip} />
              <FontAwesomeIcon icon={faCalendarDays} />
              <FontAwesomeIcon icon={faEllipsisH} />
            </MainFooter>
            <Footer>
              <div>
                <FontAwesomeIcon icon={faGear} />
                <span>글쓰기 설정</span>
              </div>
              <button>게시</button>
            </Footer>
          </form>
        </Main>
      </WriteContentBox>
    </>
  );
}
export default WriteContent;
