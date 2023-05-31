import moment from 'moment';
import { useState } from 'react';

import { useAppSelector } from '@/hooks';
import { ITwitDataWithId } from '@/types';

import { Modal } from '../Modal';
import { Twit } from '../Twit';
import { Date, Text, TwitContainer } from './styles';

export const SearchTwit: React.FC<ITwitDataWithId> = ({
  text,
  createdAt,
  id,
  image,
}) => {
  const [isTwitOpen, setIsTwitOpen] = useState(false);

  const { name, email } = useAppSelector((state) => state.firebase.profile);

  const handleClick = () => {
    setIsTwitOpen(true);
  };

  return (
    <TwitContainer onClick={handleClick}>
      {isTwitOpen && (
        <Modal setOpen={setIsTwitOpen}>
          <Twit
            authorName={name}
            text={text}
            createdAt={createdAt}
            authorEmail={email}
            image={image}
            id={id}
            modal
          />
        </Modal>
      )}
      <Text>{text}</Text>
      <Date>{moment(createdAt).fromNow()}</Date>
    </TwitContainer>
  );
};
