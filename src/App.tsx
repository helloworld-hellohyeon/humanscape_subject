import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import Global from "components/global";
import Header from "components/header";
import Footer from "components/footer";
import Search from "components/search";
import { Layout, Contents } from "components/layout";
import Notification from "components/notification";
import store from "redux/store";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Global />
          <Header />
          <Contents>
            <Search />
            <Notification />
          </Contents>
          <Footer />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
