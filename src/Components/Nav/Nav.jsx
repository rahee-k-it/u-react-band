import styled from "styled-components";

const Wrapper = styled.div`
  background-color: inherit;
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    background-position: cover;
    background-size: cover;
  }
`;

const NickName = styled.div`
  background-color: red;
  height: 30px;
`;

const MemberBox = styled.div`
  display: flex;
  span {
    margin-right: 5px;
    background-color: teal;
  }
`;

const InviteSetup = styled.div`
  background-color: teal;
`;

const WriteBtn = styled.button`
  border: none;
  background-color: #21c531;
  color: white;
  font-weight: 800;
  padding: 10px 40px;
`;

const PrivateAlarm = styled.div`
  p {
    font-size: 13px;
    opacity: 0.4;
    font-weight: 600;
  }
`;

const BandSetup = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.4;
  font-size: 14px;
  padding-top: 10px;
`;

function Nav() {
  return (
    <>
      <Wrapper>
        <ImgBox>
          <img src="band.jpg" alt="이미지가 삭제되었거나 잘못된 이미지 주소입니다." />
        </ImgBox>
        <NickName>nickname</NickName>
        <MemberBox>
          <span>멤버 1</span>
          <span>초대</span>
        </MemberBox>
        <InviteSetup>
          <span>밴드 소개 설정</span>
        </InviteSetup>
        <WriteBtn>글쓰기</WriteBtn>
        <PrivateAlarm>
          <p>밴드와 게시글이 공개되지 않습니다.</p>
          <p>초대를 통해서만 가입할 수 있습니다.</p>
        </PrivateAlarm>
        <BandSetup>
          <span>밴드 설정</span>
        </BandSetup>
      </Wrapper>
    </>
  );
}
export default Nav;
