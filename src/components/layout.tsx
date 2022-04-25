import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.blue1};
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2.125rem;
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.font.spacing}em;
  line-height: 1.6;
  text-align: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 120px);
  padding-top: 80px;
`;
