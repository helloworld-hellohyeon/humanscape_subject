import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import Global from "components/global";
import Header from "components/header";
import Footer from "components/footer";
import { Input, Recommends } from "components/search";
import { Layout, Contents } from "components/layout";
import { theme } from "./theme";
import store from "redux/store";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Global />
          <Header />
          <Contents>
            <Input />
            <Recommends />
          </Contents>
          <Footer />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
