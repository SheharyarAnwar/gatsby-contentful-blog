import React from "react";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { auth } from "./Config/firebaseConfig";
import { setUser } from "./Store/RootReducer";
const Index = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(setUser(user.toJSON()));
    });
  });
  return <>{children}</>;
};

export default Index;
