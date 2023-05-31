import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { DatePickerInput } from '@/components/DatePickerInput';
import { icons } from '@/constants/icons';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { resetAuthErrors, signUp } from '@/store/actions/authActions';
import { signUpValidationSchema } from '@/utils/validationSchemas';

import {
  Container,
  ErrorText,
  Input,
  LoginButton,
  SignUpLink,
  Title,
} from './styles';
import { SignUpData } from './types';

export const SignUpPage = () => {
  const errors = useAppSelector((state) => state.auth.authError);

  const dispatch = useAppDispatch();

  const onSubmit = ({ email, password, name, date }: SignUpData) => {
    dispatch(signUp({ email, password, birthday: new Date(date), name }));
  };

  const formOptions = {
    resolver: yupResolver(signUpValidationSchema),
  };

  const { register, handleSubmit, clearErrors, formState, control } =
    useForm<SignUpData>(formOptions);
  const { errors: err } = formState;

  const handleChange = () => {
    clearErrors();
    dispatch(resetAuthErrors());
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      {icons.twitter}
      <Title>Create an account</Title>
      <ErrorText>
        {err.email?.message ||
          err.password?.message ||
          err.name?.message ||
          err.date?.message ||
          errors ||
          ' '}
      </ErrorText>
      <Input
        placeholder="Name"
        type="text"
        {...register('name')}
        onChange={handleChange}
      />
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
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePickerInput onChange={onChange} />
        )}
      />
      <LoginButton type="submit">Sign up</LoginButton>
      <SignUpLink to={ROUTE_NAMES.LOGIN}>Use email</SignUpLink>
    </Container>
  );
};
