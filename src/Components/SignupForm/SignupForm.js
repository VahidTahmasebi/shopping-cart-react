import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../../common/Input";
import { useQuery } from "../../hooks/useQuery";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { signupUser } from "../../services/signupService";
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
  const setAuth = useAuthActions();

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const query = useQuery();
  const redirect = query.get("redirect") || "/";

  const auth = useAuth();

  // check if the user is logged in
  useEffect(() => {
    if (auth) navigate(redirect);
  }, [redirect, auth]);

  // form button operators
  const onSubmit = async (values) => {
    // get the required data from the form
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    try {
      // passing data to the server
      const { data } = await signupUser(userData);
      setAuth(data);

      // send data to local storage
      localStorage.setItem("authState", JSON.stringify(data));

      // clear state error
      setError(null);

      navigate(redirect);
    } catch (error) {
      console.log(error.response.data.message);
      // if there was an error
      if (error.response && error.response.data.message) {
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Link to={`/login?redirect=${redirect}`}>
          <p style={{ marginTop: "15px" }}>Already login ?</p>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
