import React, { useState } from "react";
import classes from "./index.module.css";
import { Form, Formik, FormikValues, useField } from "formik";
import { authenticationSchema } from "../../Validation/authenticationSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  authenticateUser,
  clearErrors,
  createUser,
} from "../../Store/RootReducer";
import { AuthParams } from "../../Store/RootReducer/index.interface";
import { Rootstate } from "../../Store";
import { toast } from "react-toastify";

const Index: React.FC = () => {
  const [type, setType] = useState<"Login" | "Signup">("Login");
  const dispatch = useDispatch();
  const { error, loading } = useSelector(
    (state: Rootstate) => state.userReducer
  );
  if (error) {
    toast.info(error);
    dispatch(clearErrors());
  }
  const initialValues: AuthParams = {
    email: "",
    password: "",
  };
  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <div
          style={{ backgroundColor: type === "Login" ? "snow" : undefined }}
          className={classes.leftControl}
          onClick={() => setType("Login")}
        >
          <h4>Login</h4>
        </div>
        <div
          style={{ backgroundColor: type === "Signup" ? "snow" : undefined }}
          className={classes.rightControl}
          onClick={() => setType("Signup")}
        >
          <h4>Signup</h4>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={authenticationSchema}
        onSubmit={(values) => {
          if (type === "Signup") {
            dispatch(createUser(values));
          } else {
            dispatch(authenticateUser(values));
          }
        }}
      >
        <Form>
          <TextField name="email" type="text" />
          <TextField name="password" type="password" />
          <button disabled={loading} type="submit">
            {loading ? <div className={classes.loader}>Loading...</div> : type}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Index;

const TextField = ({ name, type }) => {
  const [field, meta] = useField({ type, name });

  return (
    <>
      <input
        autoComplete={"off"}
        type={type}
        {...field}
        placeholder={name}
      ></input>
      <h5 style={{ textAlign: "center", color: "rgb(235, 41, 89)" }}>
        {meta.touched && meta.error ? meta.error : null}
      </h5>
    </>
  );
};
