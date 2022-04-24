import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.blue1};
`;

export const Title = styled.h1``;

export const Contents = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth}px;
  padding-top: 80px;
`;
