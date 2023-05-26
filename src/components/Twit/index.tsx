import moment from 'moment';
import { useState } from 'react';

import { ITwit } from '@/pages/FeedPage';

import { Loader } from '../Loader';
import {
  Container,
  Data,
  Image,
  ImageContainer,
  LoaderContainer,
  Text,
  Time,
  UserEmail,
  UserName,
  Wrapper,
} from './styles';

export interface TwitProps extends ITwit {
  modal?: boolean;
}

export const Twit: React.FC<TwitProps> = ({
  authorName,
  text,
  createdAt,
  authorEmail,
  image,
  modal,
}) => {
  const [isLoading, setIsLoading] = useState(Boolean(image));
  return (
    <Wrapper $inModal={Boolean(modal)}>
      <Container>
        <Data>
          <UserName>{authorName}</UserName>
          <Time>{moment(createdAt).fromNow()}</Time>
        </Data>
        <UserEmail>{authorEmail}</UserEmail>
        <Text>{text}</Text>
        {isLoading && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        <ImageContainer>
          <Image src={image} onLoad={() => setIsLoading(false)} />
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};
