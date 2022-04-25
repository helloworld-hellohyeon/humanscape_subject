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
    font-weight: ${theme.font.weight.normal};
    font-size: 1rem;
    letter-spacing: ${theme.font.spacing};
    line-height: ${theme.font.lineHeight};
    color: #000;
    background-color: #fff;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5 {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

const Global = () => {
  return <GlobalOrg styles={style} />;
};

export default memo(Global);
