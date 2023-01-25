import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../form.css";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name length is not valid"),
  email: Yup.string()
    .email("invalid email format")
    .required("email is required"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "invalid phone number format")
    .nullable(),
  password: Yup.string()
    .required("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
  passwordConfirm: Yup.string()
    .required("password confirmation is required")
    .oneOf([Yup.ref("password"), null], "passwords must match"),
});
const SignupForm = () => {
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className='formContainer'>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name='name' label='Name' />
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='phoneNumber'
          label='Phone Number'
          type='tel'
        />
        <Input
          formik={formik}
          name='password'
          label='Password'
          type='password'
        />
        <Input
          formik={formik}
          name='passwordConfirm'
          label='Password Confirm'
          type='password'
        />
        <button
          style={{ width: "100%" }}
          type='submit'
          disabled={!formik.isValid}
          className='btn primary'>
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
