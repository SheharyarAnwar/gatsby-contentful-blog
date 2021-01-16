import React from "react";
import { Provider } from "react-redux";
import store from "./Store/index";
import RootWrapper from "./index";
const Index = ({ children }) => {
  return (
    <Provider store={store}>
      <RootWrapper>{children}</RootWrapper>
    </Provider>
  );
};

export default Index;
