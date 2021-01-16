import * as Yup from "yup";
export const authenticationSchema = Yup.object({
  email: Yup.string()
    .email("Not a valid email address")
    .required("Email is Required"),
  password: Yup.string()
    .required("Password Is Required")
    .test(
      "Password length check",
      "Password should be atleast 6 characters",
      (val) => {
        if (val) {
          return val.length >= 6;
        } else {
          return false;
        }
      }
    ),
});
