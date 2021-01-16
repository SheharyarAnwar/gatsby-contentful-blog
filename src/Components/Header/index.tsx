import { Link } from "gatsby";
import React from "react";
import { navigate } from "gatsby";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../Store";
import { logoutUser } from "../../Store/RootReducer";
import classes from "./index.module.css";
const Index = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: Rootstate) => state.userReducer.user);
  const handleLogout = () => {
    dispatch(logoutUser());
    console.log("will logout");
    navigate("/");
  };
  return (
    <div className={classes.header}>
      <h2>Blogee</h2>
      {user ? (
        <>
          <h5>Welcome {user.email}</h5>
          <button className={classes.button} onClick={handleLogout}>
            <h4>Logout</h4>
          </button>
        </>
      ) : (
        <Link to="/register">
          <h5>Register</h5>
        </Link>
      )}
    </div>
  );
};

export default Index;
