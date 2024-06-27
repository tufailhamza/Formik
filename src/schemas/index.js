import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.



export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
    password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other","jobber"], "Invalid Job Type")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
