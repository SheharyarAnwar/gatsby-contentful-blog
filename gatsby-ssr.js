import React from "react";
import { Provider } from "react-redux";
import store from "./src/Store/index";

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
