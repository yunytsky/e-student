import { useFormik } from "formik";
import { newPasswordSchema } from "../../schemas";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import eyeIcon from "../../assets/eye.svg";
import slashEyeIcon from "../../assets/slash-eye.svg";
// import errorStateIcon from "../../assets/error-state.svg";
// import successStateIcon from "../../assets/success-state.svg";

import { changePassword } from "../../api";

const ChangePasswordForm = () => {
  const [submitError, setSubmitError] = useState({ error: false, message: "" });
  const [submitSuccess, setSubmitSuccess] = useState(false);

   //Error message timeout
   const [errorTimeoutID, setErrorTimeoutID] = useState(null);
   useEffect(() => {
     if (!submitError.error && errorTimeoutID !== null) {
 
       clearTimeout(errorTimeoutID);
       setErrorTimeoutID(null);
 
     } else if (submitError.error) {
       const timeout = setTimeout(() => {
        setSubmitError({ error: false, message: "" });
       }, 10000);
       setErrorTimeoutID(timeout);
     }
   }, [submitError])

    
  //Success message timeout
  const [successTimeoutID, setSuccessTimeoutID] = useState(null);
  useEffect(() => {
    if (!submitSuccess && successTimeoutID !== null) {

      clearTimeout(successTimeoutID);
      setSuccessTimeoutID(null);

    } else if (submitSuccess) {
      const timeout = setTimeout(() => {
        setSubmitSuccess(false);
      }, 10000);
      setSuccessTimeoutID(timeout);
    }
  }, [submitSuccess])


  const onSubmit = async (values, actions) => {
    try {
      if(submitError.error){
        setSubmitError({ error: false, message: "" }); 
      }
      if(submitSuccess){
        setSubmitSuccess(false); 
      }

      const formData = new FormData();

      //Append data to the form data
      formData.append("old", values.oldPassword);
      formData.append("new", values.newPassword);

      //Make api request
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      };

      const data = await changePassword(formData, config);
      
      setSubmitSuccess(true);
      actions.resetForm();

    } catch (err) {
      if(err.response && err.response.data.result === 1){
        setSubmitError({error: true, message: "Error: failed requirements."})
      }else if(err.response && err.response.data.result === 2){
        setSubmitError({error: true, message: "Error: old password is incorrect."})
      }else{
        actions.resetForm();
        setSubmitError({error: true, message: "Error. Try again."})
      }
    }
  };

  //Password toggler
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const newPasswordConfirmationRef = useRef(null);
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [newPasswordConfirmationVisible, setNewPasswordConfirmationVisible] = useState(false);

  const togglePassword = (e) => {
    if(e.currentTarget.id === "old-password" && oldPasswordRef.current){
      setOldPasswordVisible((prevVisible) => !prevVisible)
    }else if(e.currentTarget.id === "new-password" && newPasswordRef.current){
      setNewPasswordVisible((prevVisible) => !prevVisible)
    }else if(e.currentTarget.id === "new-password-confirmation" && newPasswordConfirmationRef.current){
      setNewPasswordConfirmationVisible((prevVisible) => !prevVisible)
    }
  };

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
    },
    validationSchema: newPasswordSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
      {submitError.error && (
        <div className="settings-form-submit-error">
          <img src={errorStateIcon} alt="error" />
          <span>{submitError.message}</span>
        </div>
      )}

      {submitSuccess && (
        <div className="settings-form-submit-success">
          <img src={successStateIcon} alt="success" />
          <span>Changes have been successfully saved.</span>
        </div>
      )}

      <form
        onSubmit={formik.handleSubmit}
        className="settings-form change-password-form"
      >
        {/* Old password */}
        <label htmlFor="oldPassword" className="settings-form-input-label">
          Old password
        </label>
        <div className="password-toggle-wrapper">
          <input
            className="settings-form-input"
            type={oldPasswordVisible ? "text" : "password"}
            name="oldPassword"
            id="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            ref={oldPasswordRef}
          />
          <div
            className="toggle-password"
            id="old-password"
            onClick={(e) => {
              togglePassword(e);
            }}
          >
            <img
              src={oldPasswordVisible ? eyeIcon : slashEyeIcon}
              alt="hide/show password"
            />
          </div>
        </div>
        <Link className="settings-forgot-password-link">Forgot?</Link>
        {formik.errors.oldPassword && formik.touched.oldPassword && (
          <span className="settings-form-error-message">
            {formik.errors.oldPassword}
          </span>
        )}
        {/* New password */}
        <label htmlFor="newPassword" className="settings-form-input-label">
          New password
        </label>
        <div className="password-toggle-wrapper">
          <input
            className="settings-form-input"
            type={newPasswordVisible ? "text" : "password"}
            name="newPassword"
            id="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            ref={newPasswordRef}
          />
          <div
            className="toggle-password"
            id="new-password"
            onClick={(e) => {
              togglePassword(e);
            }}
          >
            <img
              src={newPasswordVisible ? eyeIcon : slashEyeIcon}
              alt="hide/show password"
            />
          </div>
        </div>
        {formik.errors.newPassword && formik.touched.newPassword && (
          <span className="settings-form-error-message">
            {formik.errors.newPassword}
          </span>
        )}
        {/* New password confirmation */}
        <label
          htmlFor="newPasswordConfirmation"
          className="settings-form-input-label"
        >
          Confirm new password
        </label>
        <div className="password-toggle-wrapper">
          <input
            className="settings-form-input"
            type={newPasswordConfirmationVisible ? "text" : "password"}
            name="newPasswordConfirmation"
            id="newPasswordConfirmation"
            value={formik.values.newPasswordConfirmation}
            onChange={formik.handleChange}
            ref={newPasswordConfirmationRef}
          />
          <div
            className="toggle-password"
            id="new-password-confirmation"
            onClick={(e) => {
              togglePassword(e);
            }}
          >
            <img
              src={newPasswordConfirmationVisible ? eyeIcon : slashEyeIcon}
              alt="hide/show password"
            />
          </div>
        </div>
        {formik.errors.newPasswordConfirmation &&
          formik.touched.newPasswordConfirmation && (
            <span className="settings-form-error-message">
              {formik.errors.newPasswordConfirmation}
            </span>
          )}
        <button
          type="submit"
          className="settings-form-submit-button button-filled green"
          disabled={formik.isSubmitting}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;
