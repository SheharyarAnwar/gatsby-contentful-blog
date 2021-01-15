import React from "react";
import Header from "../../Components/Header/index";
import classes from "./index.module.css";
const Main: React.FC = ({ children }) => {
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Main;
