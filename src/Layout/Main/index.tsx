import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Components/Header/index";
import classes from "./index.module.css";
const Main: React.FC = ({ children }) => {
  return (
    <>
      <div className={classes.root}>
        <Header />
        <div className={classes.content}>{children}</div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
};

export default Main;
