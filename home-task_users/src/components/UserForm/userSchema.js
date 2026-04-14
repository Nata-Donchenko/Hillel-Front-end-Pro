import * as Yup from "yup";

const userSchema = Yup.object({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().required(),
  website: Yup.string().required(),
  
  address: Yup.object({
    city: Yup.string().required(),
    street: Yup.string().required(),
  }),
  
  company: Yup.object({
    name: Yup.string().required(),
  }),
});

export default userSchema;