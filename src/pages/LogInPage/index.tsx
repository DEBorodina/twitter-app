import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {} from 'react-redux';
import * as Yup from 'yup';

import { icons } from '@/constants/icons';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { useAppDispatch,useAppSelector } from '@/hooks';
import { resetAuthErrors, signIn } from '@/store/actions/authActions';

import {
  Container,
  ErrorText,
  Input,
  LoginButton,
  SignUpLink,
  Title,
} from './styles';

export interface LogInData {
  email: string;
  password: string;
}

export const LogInPage = () => {
  const errors = useAppSelector((state) => state.auth.authError);

  const dispatch = useAppDispatch();

  const onSubmit = ({ email, password }: LogInData) => {
    dispatch(signIn({ email, password }));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, clearErrors, formState } =
    useForm<LogInData>(formOptions);
  const { errors: err } = formState;

  const handleChange = () => {
    clearErrors();
    dispatch(resetAuthErrors());
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {icons.twitter}
      <Title>Log in to Twitter</Title>
      <ErrorText>
        {err.email?.message || err.password?.message || errors || ' '}
      </ErrorText>
      <Input
        placeholder="Email address"
        type="text"
        {...register('email')}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        type="password"
        {...register('password')}
        onChange={handleChange}
      />
      <LoginButton type="submit">Log in</LoginButton>
      <SignUpLink to={ROUTE_NAMES.SIGN_UP}>Sign up to Twitter</SignUpLink>
    </Container>
  );
};
