import React, { useEffect } from "react";
import { firebase, auth } from "../Config/firebaseConfig";
interface Props {}

const Index: React.FC<Props> = ({}) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return <></>;
};

export default Index;
