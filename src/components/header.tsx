import { memo } from "react";
import styled from "@emotion/styled";

const Self = styled.header`
  width: 100%;
  height: 56px;
  background-color: #fff;
`;

const Header = () => {
  return <Self></Self>;
};

export default memo(Header);
