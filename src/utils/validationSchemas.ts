import * as Yup from 'yup';

export const editProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required('User name is required'),
  telegram: Yup.string().matches(
    /^$|.*?\B@\w{5}.*/,
    'Telegram link is not valid'
  ),
  password: Yup.string().matches(/.{6,}/, {
    excludeEmptyString: true,
    message: 'Password must be at least 6 characters',
  }),
});

export const addTwitValidationSchema = Yup.object().shape({
  text: Yup.string().required('Text is required'),
  image: Yup.mixed(),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  name: Yup.string().required('Name is required'),
  date: Yup.number().required('Birth date is required'),
});
