import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;




export const BuissnessSchema = yup.object().shape({
  companyName: yup
    .string()
    .required("Company Name is required"),
  businessEmail: yup
    .string()
    .email("Invalid email address")
    .required("Business Email is required"),
  contactPerson: yup
    .string()
    .required("Contact Person is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,12}$/, "Invalid phone number format")
    .required("Phone Number is required"),
  industry: yup
    .string()
    .required("Industry is required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms and conditions"),
});
export const CustomerScema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required"),
  lastName: yup
    .string()
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,12}$/, "Invalid phone number format")
    .required("Phone Number is required"),
  dob: yup
    .date()
    .nullable()
    .required("Date of Birth is required"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid Gender")
    .required("Gender is required"),
  subscribeNewsletter: yup
    .boolean()
    .oneOf([true], "Please subscribe to our newsletter"),
});
