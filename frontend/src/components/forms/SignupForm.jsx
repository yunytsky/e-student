import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { signupSchema } from "../../schemas";

const SignupForm = () => {  
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
            unit: "",
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
          <h6>Номер студентського квитка <span>*</span></h6>
        </label>
        <input
          className="form-input"
          name="studentCard"
          placeholder="AA 00 00 00 00 00"
          id="studentCard"
          value={formik.values.studentCard}
          onChange={formik.handleChange}
        />

        {formik.errors.studentCard && formik.touched.studentCard && (
          <span className="form-error-message">
            {formik.errors.studentCard}
          </span>
        )}

        {/* Unit */}
        <label htmlFor="unit">
          <h6>Структурний підрозділ <span>*</span></h6>
        </label>

        <select
          className="form-input"
          name="unit"
          id="unit"
          value={formik.values.unit}
          onChange={formik.handleChange}
        >
          <option label=" "></option>
          <option value="Факультет комп'ютерних наук та кібернетики">Факультет комп'ютерних наук і технологій</option>
          <option value="Філософський факультет">Філософський Факультет</option>
          <option value="Інститут журналістики">Інститут журналістики</option>
          <option value="Факультет інформаційних технологій">Факультет інформаційних технологій</option>
        </select>

        {formik.errors.unit && formik.touched.unit && (
          <span className="form-error-message">
            {formik.errors.unit}
          </span>
        )}

        {/* Password */}
        <label htmlFor="password">
          <h6>Пароль <span>*</span></h6>
        </label>
        <input
          className="form-input"
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        {formik.errors.password && formik.touched.password && (
          <span className="form-error-message">
            {formik.errors.password}
          </span>
        )}

        {/* Password confirmation */}
        <label htmlFor="confirmPassword">
          <h6>Підтвердіть пароль <span>*</span></h6>
        </label>
        <input
          className="form-input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />

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
        <button
          type="submit"
          className="form-submit-button button-filled"
        >
          Зареєструватись
        </button>

        <span className="form-auxiliary-link">
          Уже є акаунт? <Link to="/login">Увійти</Link>
        </span>

        {submitError && (
          <h6 className="form-submit-error">
            Error submitting the form
          </h6>
        )}
      </form>
    );  
};

export default SignupForm;