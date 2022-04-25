import { memo } from "react";
import styled from "@emotion/styled";

const FOOTER_FONT_COLOR = "#a7afb7";

const Self = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  color: ${FOOTER_FONT_COLOR};
  background-color: ${(props) => props.theme.colors.blue4};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1040px;
  padding: 0 20px;
  font-family: ${(props) => props.theme.font.family};
  font-weight: ${(props) => props.theme.font.weight.normal};
  font-size: 1rem;
  letter-spacing: ${(props) => props.theme.font.spacing}em;
  line-height: 1.6;
`;

const Copyright = styled.div``;

const Company = styled.div`
  margin-bottom: 16px;
`;

const Info = styled.div`
  margin-bottom: 16px;
  font-size: 0.875rem;
`;

const Image = styled.img``;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PrivateInfo = styled.div`
  display: block;
  margin-bottom: 16px;
`;

const A = styled.a`
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${FOOTER_FONT_COLOR};
`;

const Copy = styled.div`
  margin-bottom: 16px;
`;

const Footer = () => {
  return (
    <Self>
      <Inner>
        <Copyright>
          <Company>(주)휴먼스케이프</Company>
          <Info>
            서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자:
            장민후
            <br />© 2021 Humanscape, All rights reserved.
          </Info>
          <Image src="./kids.png" alt="한국의약품안전관리원 로고" />
        </Copyright>
        <Menu>
          <PrivateInfo>
            <A
              href="https://clinicaltrialskorea.com/terms?type=privacy"
              title="한국임상정보 개인정보처리방침"
            >
              개인정보처리방침
            </A>
          </PrivateInfo>
          <Copy>Living healthier by connecting better</Copy>
        </Menu>
      </Inner>
    </Self>
  );
};

export default memo(Footer);
