import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import store from "./redux/store";
import SearchPlace from "./SearchPlace";

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header>
          <h1 style={{ color: "#fff" }}>Google Place Autocomplete</h1>
        </Header>
        <Content style={{ padding: "50px", textAlign: "center" }}>
          <SearchPlace />
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
