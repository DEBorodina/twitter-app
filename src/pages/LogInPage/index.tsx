import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {} from 'react-redux';

import { icons } from '@/constants/icons';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { resetAuthErrors, signIn } from '@/store/actions/authActions';
import { ICredentials } from '@/types';
import { loginValidationSchema } from '@/utils/validationSchemas';

import {
  Container,
  ErrorText,
  Input,
  LoginButton,
  SignUpLink,
  Title,
} from './styles';

export const LogInPage = () => {
  const errors = useAppSelector((state) => state.auth.authError);

  const dispatch = useAppDispatch();

  const formOptions = { resolver: yupResolver(loginValidationSchema) };

  const { register, handleSubmit, clearErrors, formState } =
    useForm<ICredentials>(formOptions);
  const { errors: err } = formState;

  const onSubmit = ({ email, password }: ICredentials) => {
    dispatch(signIn({ email, password }));
  };

  const handleChange = () => {
    clearErrors();
    dispatch(resetAuthErrors());
  };

  const displayError =
    err.email?.message || err.password?.message || errors || ' ';

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {icons.twitter}
      <Title>Log in to Twitter</Title>
      <ErrorText>{displayError}</ErrorText>
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
