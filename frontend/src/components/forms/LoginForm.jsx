import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { loginSchema } from "../../schemas";

import eyeOpenedIcon from "../../assets/eye-opened.svg";
import eyeClosedIcon from "../../assets/eye-closed.svg";

const LoginForm = () => {
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log("Form submitted");
    actions.resetForm();
    try {
      //api request here
    } catch (err) {}
  };

  //Password toggler
  const passwordRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    if (passwordRef.current) {
      setPasswordVisible((prevVisible) => !prevVisible);
    }
  };

  const formik = useFormik({
    initialValues: {
      studentCard: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <h3>Вхід</h3>
      <label htmlFor="email">
        Номер студентського квитка <span>*</span>
      </label>
      <input
        className="form-input"
        placeholder="AA 00 00 00 00 00"
        name="studentCard"
        id="studentCard"
        value={formik.values.studentCard}
        onChange={formik.handleChange}
      />
      {formik.errors.studentCard && formik.touched.studentCard && (
        <span className="form-error-message">
          <h6>{formik.errors.studentCard}</h6>
        </span>
      )}

      <label htmlFor="password">
        Пароль <span>*</span>
      </label>

      <div className="toggle-password-wrapper">
        <input
          className="form-input"
          type={passwordVisible ? "text" : "password"}
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          ref={passwordRef}
        />

          <div className="toggle-password" onClick={togglePassword}>
            <img
              src={passwordVisible ? eyeOpenedIcon : eyeClosedIcon}
              alt="hide/show password"
            />
          </div>
      </div>

      {formik.errors.password && formik.touched.password && (
        <span className="form-error-message">
          <h6>{formik.errors.password}</h6>
        </span>
      )}

      <Link className="forgot-password-link" to="#">
        Забули пароль?
      </Link>

      <button type="submit" className="form-submit-button button-filled">
        Увійти
      </button>

      <span className="form-auxiliary-link">
        Немає акаунту? <Link to="/signup">Зареєструватись</Link>
      </span>

      {submitError && (
        <h6 className="form-submit-error">Error submitting the form</h6>
      )}
    </form>
  );
};

export default LoginForm;