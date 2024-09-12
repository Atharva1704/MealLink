import * as yup from "yup";

const passwordRules = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const donateSchema = yup.object().shape({
  name: yup.string().required("Required"),

  type: yup.string().oneOf(["Veg", "Non Veg"]).required("Required"),

  quantity: yup.number().required("Required"),

  serving: yup.number().required("Required"),

  expiry: yup.date().required("Required"),

  expiryTime: yup.number().required("Required"),
});
