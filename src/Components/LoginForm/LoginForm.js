import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import "../form.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),

  password: Yup.string().required("password is required"),
});

const LoginForm = () => {
  const onSubmit = async (values) => {
    try {
    } catch (error) {}
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
        <Input formik={formik} name='email' label='Email' type='email' />
        <Input
          formik={formik}
          name='password'
          label='password'
          type='password'
        />
        <button
          style={{ width: "100%" }}
          type='submit'
          disabled={!formik.isValid}
          className='btn primary'>
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
