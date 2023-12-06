import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { signupSchema } from "../../schemas";
import {useDispatch} from "react-redux";
import { signUp } from "../../api";

import eyeOpenedIcon from "../../assets/eye-opened.svg";
import eyeClosedIcon from "../../assets/eye-closed.svg";
import { doSignIn } from "../../features/auth";

const SignupForm = () => {  
    const [submitError, setSubmitError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
      const data = {studentNumber: values.studentCard, password: values.password};
      
      try{
        const token = await signUp(data);
        dispatch(doSignIn(token));
        localStorage.setItem("token", token);
        navigate("/app/student/cabinet");
        actions.resetForm();
      }catch(err){
        console.log("ERROR", err)
        if(err.response && err.response.status !== 500){
          setSubmitError({error: true, message: err.response.data});
        }else{
          setSubmitError({error: true, message: "Помилка при відправці форми"});
        }
      }
  
    };
  

    //Password toggler
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const togglePassword = (e) => {
      if (passwordRef.current && e.currentTarget.id === "password-toggler") {
        setPasswordVisible((prevVisible) => !prevVisible);
      }else if(confirmPasswordRef.current && e.currentTarget.id === "confirm-password-toggler"){
        setConfirmPasswordVisible((prevVisible) => !prevVisible);
      }
    };
    
    const formik = useFormik({
        initialValues: {
            studentCard: "",
            password: "",
            confirmPassword: "",
            acceptTos: false
        },
        validationSchema: signupSchema,
        onSubmit: onSubmit
    })

    return (
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h3>Реєстрація</h3>

        {/* Student card number */}
        <label htmlFor="studentCard">
          <h6>
            Номер студентського квитка <span>*</span>
          </h6>
        </label>
        <input
          className="form-input"
          name="studentCard"
          placeholder="AA 00000000"
          id="studentCard"
          value={formik.values.studentCard}
          onChange={formik.handleChange}
        />

        {formik.errors.studentCard && formik.touched.studentCard && (
          <span className="form-error-message">
            {formik.errors.studentCard}
          </span>
        )}

        {/* Password */}
        <label htmlFor="password">
          <h6>
            Пароль <span>*</span>
          </h6>
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
          <div
            className="toggle-password"
            id="password-toggler"
            onClick={(e) => {
              togglePassword(e);
            }}
          >
            <img
              src={passwordVisible ? eyeOpenedIcon : eyeClosedIcon}
              alt="hide/show password"
            />
          </div>
        </div>

        {formik.errors.password && formik.touched.password && (
          <span className="form-error-message">{formik.errors.password}</span>
        )}

        {/* Password confirmation */}
        <label htmlFor="confirmPassword">
          <h6>
            Підтвердіть пароль <span>*</span>
          </h6>
        </label>
        <div className="toggle-password-wrapper">
          <input
            className="form-input"
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            ref={confirmPasswordRef}
          />
          <div
            className="toggle-password"
            id="confirm-password-toggler"
            onClick={(e) => {
              togglePassword(e);
            }}
          >
            <img
              src={passwordVisible ? eyeOpenedIcon : eyeClosedIcon}
              alt="hide/show password"
            />
          </div>
        </div>

        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <span className="form-error-message">
            {formik.errors.confirmPassword}
          </span>
        )}

        {/* Terms of service */}
        <label className="form-checkbox-label" htmlFor="acceptTos">
          <input
            className="form-checkbox"
            type="checkbox"
            name="acceptTos"
            id="acceptTos"
            checked={formik.values.acceptTos}
            value={formik.values.acceptTos}
            onChange={formik.handleChange}
          />
          <div className="custom-checkbox"></div>
          Погоджуюсь з обробкою персональних даних
        </label>

        {formik.errors.acceptTos && formik.touched.acceptTos && (
          <span className="form-error-message tos">
            {formik.errors.acceptTos}
          </span>
        )}

        {/* Submit button */}
        <button type="submit" className="form-submit-button button-filled" disabled={formik.isSubmitting}>
          Зареєструватись
        </button>

        <span className="form-auxiliary-link">
          Уже є акаунт? <Link to="/login">Увійти</Link>
        </span>

        {submitError.error && (
          <h6 className="form-submit-error">{submitError.message}</h6>
        )}
      </form>
    );  
};

export default SignupForm;