import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .required('Будь ласка, введіть дійсну адресу електронної пошти.')
    .min(6, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .max(63, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      'Будь ласка, введіть дійсну адресу електронної пошти.'
    ),
});

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість')
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      'Невірне імʼя'
    ),
  email: Yup.string()
    .required('Поле обовʼязкове до заповнення')
    .min(6, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .max(63, 'Будь ласка, введіть дійсну адресу електронної пошти.')
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      'Будь ласка, введіть дійсну адресу електронної пошти.'
    ),
  message: Yup.string()
    .trim()
    .required('Поле обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(1000, 'Перевищена максимальна кількість'),
});

export const orderFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required('Поле імʼя обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість')
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      'Невірне імʼя'
    ),
  secondName: Yup.string()
    .trim()
    .required('Поле імʼя обовʼязкове до заповнення')
    .min(3, 'Поле має містити як мінімум 3 символи')
    .max(70, 'Перевищена максимальна кількість')
    .matches(
      /^(?!.*(\s-|-\s)|.*--|.*——|.*––|.*–\s|.*\s–|.*—\s|.*\s—)[а-яА-Яa-zA-Z\s'’\-–—ЇїІіЄєҐґ]*$/,
      'Невірне імʼя'
    ),
  orderEmail: Yup.string()
    .required('Поле пошта обовʼязкове до заповнення')
    .min(6, 'Поле має містити як мінімум 6 символів')
    .max(63, 'Перевищена максимальна кількість')
    .matches(
      /^[a-zA-Z0-9_][a-zA-Z0-9_.-]*@[a-zA-Z0-9.-]+[a-zA-Z0-9-]*\.[a-zA-Z]{2,4}$/,
      'Будь ласка, введіть дійсну адресу електронної пошти.'
    ),
  phoneNumber: Yup.string()
    .trim()
    .required('Поле телефону обовʼязкове до заповнення')
    .min(10, 'Поле має містити як мінімум 10 символів')
    .max(17, 'Перевищена максимальна кількість')
    .matches(
      /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
      'Будь ласка, введіть дійсний номер телефону.'
    ),
  city: Yup.string().trim().required('Поле обовʼязкове до заповнення'),
  warehouse: Yup.string().trim().required('Поле обовʼязкове до заповнення'),
  agreement: Yup.boolean().oneOf([true], 'Поле обовʼязкове'),
});
