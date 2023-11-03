import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginSchema } from "../../schemas";

const LoginForm = () => {  
    const [submitError, setSubmitError] = useState(false);

    const onSubmit = async (values,actions) => {
        console.log("Form submitted");
        actions.resetForm();
        try{
            //api request here
         }catch(err){

         }
    };
    
    const formik = useFormik({
        initialValues: {
            studentCard: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: onSubmit
    })

    return (
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h3>Вхід</h3>
        <label htmlFor="email">
          Номер студентського квитка <span>*</span>
        </label>
        <input
          className="form-input"
          name="studentCard"
          id="studentCard"
          value={formik.values.studentCard}
          onChange={formik.handleChange}
        />
                {formik.errors.studentCard &&
          formik.touched.studentCard && (
            <span className="form-error-message">{formik.errors.studentCard}</span>
          )}


        <label htmlFor="password">
          Пароль <span>*</span>
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
                {formik.errors.password &&
          formik.touched.password && (
            <span className="form-error-message">{formik.errors.password}</span>
          )}

        <Link className="forgotten-password-link" to="#">Забули пароль?</Link>

        <button
          type="submit"
          className="form-submit-button button-filled"
        >
          Зареєструватись
        </button>

        <span className="form-auxiliary-link">
          Немає акаунту? <Link to="#">Зареєструватись</Link>
        </span>
        
        {submitError &&
        (
            <h6 className="form-submit-error">Error submitting the form</h6>
          )}
      </form>
    );  
};

export default LoginForm;