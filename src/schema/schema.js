import * as yup from "yup";

export const authSchema = yup.object({
  name: yup
    .string()
    .required("Full Name is required")
    .min(8, "Name must be at least 8 characters")
    .max(50, "Name must be no more than 50 characters")
    .matches(
      /^[a-zA-Zа-яА-Я0-9\s]*$/,
      "Name can only contain letters, numbers, and spaces"
    ),
  email: yup
    .string()
    .trim()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  date_of_birth: yup.string().required("Date of birth is required"),
  about_us: yup.string().required("Please select an option"),
});
