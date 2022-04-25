import { memo } from "react";
import styled from "@emotion/styled";

import { ReactComponent as LogoOrg } from "../assets/logo.svg";

const Self = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.theme.sizes.header}px;
  min-height: ${(props) => props.theme.sizes.header}px;
  background-color: #fff;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1040px;
`;

const Logo = styled(LogoOrg)`
  width: auto;
  height: 24px;
`;

const Menus = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const A = styled.a`
  padding: 8px 16px;
  font-size: 1rem;
  line-height: 1.6;
`;

const Header = () => {
  return (
    <Self>
      <Inner>
        <Logo />
        <Menus>
          <Menu>
            <A>소식받기</A>
          </Menu>
          <Menu>
            <A>제휴/문의</A>
          </Menu>
        </Menus>
      </Inner>
    </Self>
  );
};

export default memo(Header);
