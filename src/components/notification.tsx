import { memo } from "react";
import styled from "@emotion/styled";

import { ReactComponent as NotiSvg } from "../assets/notice.svg";

const Self = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 224px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: #fff;
  background-color: ${(props) => props.theme.colors.blue2};
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
`;

const Content = styled.div`
  padding: 24px 0 16px;
`;

const Title = styled.div`
  margin-bottom: 16px;
  font-size: 1.125rem;
`;

const Button = styled.button`
  padding: 10px 24px;
  border-radius: 24px;
  color: ${(props) => props.theme.colors.blue2};
  border: 0;
  background-color: #fff;
`;

const Image = styled(NotiSvg)`
  position: absolute;
  right: 0;
  bottom: -7px;
`;

const Notification = () => {
  return (
    <Self>
      <Inner>
        <Content>
          <Title>새로운 임상실험이 등록되면 문자로 알려드려요</Title>
          <Button>임상실험 소식받기</Button>
        </Content>
        <Image />
      </Inner>
    </Self>
  );
};

export default memo(Notification);
