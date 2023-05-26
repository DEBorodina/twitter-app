import { useState } from 'react';

import { icons } from '@/constants/icons';

import { EditProfileForm } from '../EditProfileForm';
import { Modal } from '../Modal';
import {
  EditButton,
  Header,
  ModalButton,
  User,
  UserEmail,
  UserName,
} from './styles';

export interface ProfileHeaderProps {
  onProfileUpdate: () => Promise<void>;
  user: {
    name: string;
    email: string;
    gender?: string;
    telegram?: string;
  };
  onMenuOpen: () => void;
  onSearchOpen: () => void;
}
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  onProfileUpdate,
  onMenuOpen,
  onSearchOpen,
  user,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, email } = user;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Header>
      <ModalButton onClick={onMenuOpen}> {icons.burger}</ModalButton>
      <User>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </User>
      {isModalOpen && (
        <Modal setOpen={setIsModalOpen}>
          <EditProfileForm
            setOpen={setIsModalOpen}
            onDone={onProfileUpdate}
            user={user}
          />
        </Modal>
      )}
      <EditButton onClick={handleClick}>Edit profile</EditButton>
      <ModalButton onClick={onSearchOpen}>{icons.search}</ModalButton>
    </Header>
  );
};
