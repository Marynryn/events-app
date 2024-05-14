import * as yup from "yup";

export const authSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be no more than 32 characters")
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
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9!@#$%^&*()-_=+[\]{}|;:',.<>?/~`]+$/,
      "Invalid password format"
    )
    .min(6, "Password must be at least 8 characters")
    .max(64, "Password must be no more than 64 characters")
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),
});
export const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{5,15}$/, "Phone  must be 5 - 15 digits"),
  age: yup
    .number("Age must be a number")
    .required("Age is required")
    .min(1, "Age must be at least 1")
    .max(18, "Age must be less than 18"),

  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  name: yup
    .string()
    .required("Name is required")
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be no more than 32 characters")
    .matches(
      /^[a-zA-Zа-яА-Я0-9\s]*$/,
      "Name can only contain letters, numbers, and spaces"
    ),
  comment: yup.string(),
  meetingTime: yup.object().required("Choose a meeting"),
});
