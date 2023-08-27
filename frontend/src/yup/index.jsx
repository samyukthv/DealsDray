import * as Yup from "yup";


export const loginSchema=Yup.object({
  username: Yup.string().min(4).max(20).required("Please enter your username"),
    password: Yup.string().min(4).required("Please enter password"),

  })
