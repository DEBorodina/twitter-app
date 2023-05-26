import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { icons } from '@/constants/icons';
import { TwitsHelper } from '@/utils/TwitsHelper';

import { Loader } from '../Loader';
import {
  Button,
  ButtonsContainer,
  ErrorText,
  FileInput,
  Form,
  InputContainer,
  Label,
  LoaderContainer,
  Text,
  TextArea,
  Title,
} from './styles';
import { AddTwitProps, TwitFormProps } from './types';

export const TwitForm: React.FC<TwitFormProps> = ({ onDone, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    text: Yup.string().required('Text is required'),
    image: Yup.mixed(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, clearErrors, formState, watch } =
    useForm<AddTwitProps>(formOptions);

  const { errors: err } = formState;

  const onSubmit = async ({ text, image }: AddTwitProps) => {
    setIsLoading(true);
    await TwitsHelper.addTwit({ text, image: image[0] });
    await onDone();
    setIsLoading(false);
    setOpen(false);
  };

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleChange = () => {
    clearErrors();
  };

  const image = watch('image');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <Title>Add Twit</Title>
      <ErrorText>{err.text?.message?.toString()}</ErrorText>
      <TextArea
        placeholder="Twit"
        {...register('text')}
        onChange={handleChange}
      />
      <InputContainer>
        <Label htmlFor="file-input">{icons.image}</Label>
        <FileInput
          id="file-input"
          type="file"
          {...register('image')}
          accept="image/*"
        />
        <Text>{image && (image.length > 0 ? image[0].name : '')}</Text>
      </InputContainer>
      <ButtonsContainer>
        <Button type="submit">Twit</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonsContainer>
    </Form>
  );
};
