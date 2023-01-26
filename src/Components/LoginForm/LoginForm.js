import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../common/Input";
import { loginUser } from "../../services/loginServices";
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
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    try {
      // passing data to the server
      const { data } = await loginUser(values);
      console.log(data);
      // clear state error
      setError(null);
    } catch (error) {
      // if there was an error
      if (error.response && error.response.data.message) {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      }
    }
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
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
