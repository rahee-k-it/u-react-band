import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faAngleRight, faGear } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickAtom, darkAtom } from "../../atom";

const Wrapper = styled.div`
  background-color: inherit;
  width: 40%;
  display: flex;
  flex-direction: column;
  opacity: ${(props) => props.isDark};
`;

const ImgBox = styled.img`
  width: 100%;
  height: 150px;
  background-image: url("img/bigbunny.png");
  background-position: center;
  background-size: cover;
`;

const NickName = styled.div`
  background-color: inherit;
  height: 20px;
  font-size: 20px;
  font-weight: 800;
  margin: 15px 0px;
`;

const MemberBox = styled.div`
  display: flex;
  opacity: 0.6;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  font-size: 15px;
  span {
    margin-right: 10px;
  }
  div {
    color: #21c531;
    font-weight: 400;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
  }
`;

const InviteSetup = styled.div`
  opacity: 0.6;
  margin: 5px 0px;
  span {
    margin-right: 5px;
  }
`;

const WriteBtn = styled.button`
  border: none;
  background-color: #21c531;
  margin: 10px 0px;
  color: white;
  font-weight: 800;
  padding: 10px 40px;
  cursor: pointer;
`;

const PrivateAlarm = styled.div`
  margin: 5px 0px;
  p {
    font-size: 13px;
    opacity: 0.4;
    font-weight: 600;
    margin: 5px 0px;
  }
`;

const BandSetup = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.4;
  font-size: 14px;
  padding-top: 10px;
  svg {
    margin-right: 5px;
  }
`;

function Nav() {
  const setIsdark = useSetRecoilState(darkAtom);
  const [clicked, setClicked] = useRecoilState(clickAtom);
  const onClick = () => {
    setClicked(!clicked);
    setIsdark((dark) => (dark === 1 ? 0.5 : 1));
  };

  return (
    <>
      <Wrapper>
        <ImgBox></ImgBox>
        <NickName>nickname</NickName>
        <MemberBox>
          <span>멤버 1</span>
          <div>
            <FontAwesomeIcon icon={faCirclePlus} />
            <span>초대</span>
          </div>
        </MemberBox>
        <InviteSetup>
          <span>밴드 소개 설정</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </InviteSetup>
        <WriteBtn onClick={onClick}>글쓰기</WriteBtn>
        <PrivateAlarm>
          <p>밴드와 게시글이 공개되지 않습니다.</p>
          <p>초대를 통해서만 가입할 수 있습니다.</p>
        </PrivateAlarm>
        <BandSetup>
          <FontAwesomeIcon icon={faGear} />
          <span>밴드 설정</span>
        </BandSetup>
      </Wrapper>
    </>
  );
}
export default Nav;
