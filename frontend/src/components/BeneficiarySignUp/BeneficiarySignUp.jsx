import { useState } from "react";
import "./BeneficiarySignUp.css";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/index";
import { useNavigate } from "react-router-dom";

const BeneficiarySignUp = () => {
  const [pageType, setPageType] = useState("login");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const navigate = useNavigate();

  const onSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      numbers: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const register = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const savedUserResponse = await fetch(
      "http://localhost:3000/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
    }
  };

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      navigate("/beneficiary/dashboard");
    }
  };

  return (
    <div className="signup">
      <form className="formss" onSubmit={handleSubmit} autoComplete="off">
        <h1 className="topName">
          BENEFICIARY {isLogin ? "LOGIN" : "SIGNUP"} PAGE
        </h1>
        {isRegister && (
          <div className="blockss">
            <label htmlFor="name" className="labelClass">
              Name
            </label>
            <input
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Enter your Name"
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>
        )}
        <div className="blockss">
          <label htmlFor="email" className="labelClass">
            Email
          </label>
          <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Enter your email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        {isRegister && (
          <div className="blockss">
            <label htmlFor="address" className="labelClass">
              Address
            </label>
            <input
              value={values.address}
              onChange={handleChange}
              id="address"
              type="text"
              placeholder="Enter your Address"
              onBlur={handleBlur}
              className={errors.address && touched.address ? "input-error" : ""}
            />
            {errors.address && touched.address && (
              <p className="error">{errors.address}</p>
            )}
          </div>
        )}

        {isRegister && (
          <div className="blockss">
            <label htmlFor="numbers" className="labelClass">
              Contact Number
            </label>
            <input
              id="numbers"
              type="tel"
              placeholder="Enter your contact number"
              value={values.numbers}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.numbers && touched.numbers ? "input-error" : ""}
            />
            {errors.numbers && touched.numbers && (
              <p className="error">{errors.numbers}</p>
            )}
          </div>
        )}
        <div className="blockss">
          <label htmlFor="password" className="labelClass">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        {isRegister && (
          <div className="blockss">
            <label htmlFor="confirmPassword" className="labelClass">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        <button disabled={isSubmitting} type="submit">
          Submit
        </button>

        <h3
          className="textDown"
          onClick={() => setPageType(isLogin ? "register" : "login")}
        >
          {isLogin
            ? "Don't have an account? Sign Up here."
            : "Already have an account? Login here."}
        </h3>
      </form>
    </div>
  );
};

export default BeneficiarySignUp;
