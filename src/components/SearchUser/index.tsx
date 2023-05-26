import { IUserDataWithId } from '@/types';

import { User, UserEmail, UserName } from './styles';

export const SearchUser: React.FC<IUserDataWithId> = ({ name, email }) => (
  <User>
    <UserName>{name}</UserName>
    <UserEmail>{email}</UserEmail>
  </User>
);
