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

export interface WhatsHappeningFormProps {
  onAddNewTwit: () => Promise<void>;
  user: {
    email: string;
    name: string;
  };
}

export const WhatsHappeningForm: React.FC<WhatsHappeningFormProps> = ({
  onAddNewTwit,
  user: { name, email },
}) => {
  const [twit, setTwit] = useState('');
  const [image, setImage] = useState<File | null>();

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
    setTwit('');
    setImage(null);
    const data: { text: string; image?: File } = { text: twit };
    if (image) data.image = image;
    await TwitsHelper.addTwit(data);
    await onAddNewTwit();
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
          <Button type="submit" $disabled={twit === ''}>
            Twit
          </Button>
        </ButtonsContainer>
      </Container>
    </Wrapper>
  );
};
