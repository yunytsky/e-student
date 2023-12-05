import * as yup from "yup";

export const signupSchema = yup.object().shape({
  studentCard: yup
    .string()
    .matches(/^[A-Z]{2}\s\d{8}$/, "Неправильний формат")
    .required("Обов'язкове поле"),
  unit: yup
    .string()
    .oneOf(
      [
        "Факультет комп'ютерних наук та кібернетики",
        "Філософський факультет",
        "Факультет інформаційних технологій",
        "Інститут журналістики",
      ],
      "Вказано неправильний стркутурний підрозділ"
    )
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