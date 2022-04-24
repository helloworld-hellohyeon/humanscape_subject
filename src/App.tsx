import { ThemeProvider } from "@emotion/react";
import Global from "components/global";
import Header from "components/header";
import Footer from "components/footer";
import { Input, Recommend, Recommends } from "components/search";
import { Layout, Contents } from "components/layout";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Global />
        <Header />
        <Contents>
          <Input />
          <Recommends />
        </Contents>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
