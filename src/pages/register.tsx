import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AuthModal from "../Components/AuthModal";
import Layout from "../Layout/Main/index";
import { navigate } from "gatsby";
import { Rootstate } from "../Store";
const Register = () => {
  const user = useSelector((state: Rootstate) => state.userReducer.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      return;
    }
  }, [user]);
  return (
    <Layout>
      <AuthModal />
    </Layout>
  );
};

export default Register;
