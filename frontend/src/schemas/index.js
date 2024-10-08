import * as yup from "yup";

export const signupSchema = yup.object().shape({
  studentCard: yup
    .string()
    .matches(/^[A-Z]{2}\s\d{8}$/, "Введіть у форматі 'NN 00000000'")
    .required("Обов'язкове поле"),
  password: yup
    .string()
    .min(6, "Пароль має містити принаймні 6 символів")
    .matches(/[a-z]/, "Пароль має містити принаймні одну маленьку літеру")
    .matches(/\d/, "Пароль має містити принаймні одну цифру")
    .required("Обов'язкове поле"),
  confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Паролі не співпадають")
      .required("Обов'язкове поле"),
  acceptTos: yup.boolean().oneOf([true], "Немає згоди на обробку персональних даних")
});

export const signinSchema = yup.object().shape({
  studentCard: yup
    .string()
    .matches(/^[A-Z]{2}\s\d{8}$/, "Неправильний формат")
    .required("Обов'язкове поле"),
  password: yup
    .string()
    .required("Обов'язкове поле")
});

export const changePasswordSchema = yup.object().shape({
  oldPassword: yup
  .string()
  .required("Обов'язкове поле"),
  confirmOldPassword: yup
    .string()
    .oneOf([yup.ref("oldPassword"), null], "Паролі не співпадають")
    .required("Обов'язкове поле"),
  newPassword: yup
  .string()
  .min(6, "Пароль має містити принаймні 6 символів")
  .matches(/[a-z]/, "Пароль має містити принаймні одну маленьку літеру")
  .matches(/\d/, "Пароль має містити принаймні одну цифру")
  .required("Обов'язкове поле"),
});