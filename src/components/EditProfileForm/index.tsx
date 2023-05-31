import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { theme } from '@/constants/themes';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { changeTheme } from '@/store/actions/themeActions';
import { UserHelper } from '@/utils/UserHelper';
import { editProfileValidationSchema } from '@/utils/validationSchemas';

import { Loader } from '../Loader';
import { Selector } from '../Selector';
import {
  Button,
  ButtonsContainer,
  ErrorText,
  Form,
  Input,
  LoaderContainer,
  SelectorsContainer,
  SelectorWithLabel,
  Text,
  Title,
} from './styles';
import { EditProfileData, EditProfileFormProps } from './types';

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  setOpen,
  onDone,
  user: { name, gender, telegram },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const currentTheme = useAppSelector((state) => state.theme.theme);

  const formOptions = {
    resolver: yupResolver(editProfileValidationSchema),
    defaultValues: { name, telegram, gender },
  };

  const { register, handleSubmit, clearErrors, formState, control } =
    useForm<EditProfileData>(formOptions);

  const { errors: err } = formState;

  const onSubmit = async (data: EditProfileData) => {
    setIsLoading(true);
    await UserHelper.updateUser(data);
    await onDone();
    setIsLoading(false);
    setOpen(false);
  };

  const onChange = () => {
    clearErrors();
  };

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleChangeTheme = (option: string) => {
    dispatch(changeTheme(option as theme));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <Title>Edit Profile</Title>
      <ErrorText>
        {err.name?.message?.toString() ||
          err.telegram?.message?.toString() ||
          err.password?.message?.toString()}
      </ErrorText>
      <Text>User name</Text>
      <Input
        placeholder="User name"
        type="text"
        {...register('name')}
        onChange={onChange}
      />
      <Text>Telegram link</Text>
      <Input
        placeholder="Telegram link"
        type="text"
        {...register('telegram')}
        onChange={onChange}
      />
      <Text>Password</Text>
      <Input
        placeholder="New password"
        type="password"
        {...register('password')}
        onChange={onChange}
      />
      <SelectorsContainer>
        <SelectorWithLabel>
          <Text>Gender</Text>
          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <Selector
                onClick={onChange}
                width="100%"
                options={['male', 'female']}
                placeholder="Not chosen"
                value={value}
              />
            )}
          />
        </SelectorWithLabel>
        <SelectorWithLabel>
          <Text>Theme</Text>
          <Selector
            onClick={handleChangeTheme}
            width="100%"
            options={['light', 'dark']}
            value={currentTheme}
          />
        </SelectorWithLabel>
      </SelectorsContainer>
      <ButtonsContainer>
        <Button type="submit">save</Button>
        <Button onClick={onCancel}>cancel</Button>
      </ButtonsContainer>
    </Form>
  );
};
