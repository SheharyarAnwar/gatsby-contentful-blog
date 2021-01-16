import ReduxWrapper from "./src/reduxWrapper";
import React from "react";
export const wrapRootElement = ({ element }) => {
  return <ReduxWrapper>{element}</ReduxWrapper>;
};
