import React, { useState } from 'react';

import { icons } from '@/constants/icons';
import { TwitsHelper } from '@/utils/TwitsHelper';

import {
  Button,
  ButtonsContainer,
  Container,
  Data,
  FileInput,
  InputContainer,
  Label,
  Text,
  TextArea,
  UserEmail,
  UserName,
  Wrapper,
} from './styles';
import { AddTwitProps, WhatsHappeningFormProps } from './types';

export const WhatsHappeningForm: React.FC<WhatsHappeningFormProps> = ({
  onAddNewTwit,
  user: { name, email },
}) => {
  const [twit, setTwit] = useState('');
  const [image, setImage] = useState<File | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTwit(e.target.value);
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const addTwit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (twit) {
      setTwit('');
      setImage(undefined);
      const data: AddTwitProps = { text: twit, image };
      await TwitsHelper.addTwit(data);
      await onAddNewTwit();
    }
  };

  return (
    <Wrapper>
      <Container onSubmit={addTwit}>
        <Data>
          <UserName>{name}</UserName>
        </Data>
        <UserEmail>{email}</UserEmail>
        <TextArea
          placeholder="Whats happening"
          value={twit}
          onChange={handleChange}
        />
        <InputContainer>
          <Label htmlFor="file-input">{icons.image}</Label>
          <FileInput
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleAddImage}
          />
          <Text>{image?.name}</Text>
        </InputContainer>
        <ButtonsContainer>
          <Button type="submit" $disabled={twit === ''} aria-label="add-button">
            Twit
          </Button>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};
