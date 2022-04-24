import { memo } from "react";
import { Global as GlobalOrg, css } from "@emotion/react";
import { theme } from "../theme";

const style = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${theme.font.family};
    background-color: #fff;
  }
`;

const Global = () => {
  return <GlobalOrg styles={style} />;
};

export default memo(Global);
