import { User, UserEmail, UserName } from './styles';

export interface SearchUserProps {
  id: string;
  email: string;
  name: string;
}
export const SearchUser: React.FC<SearchUserProps> = ({ name, email }) => (
  <User>
    <UserName>{name}</UserName>
    <UserEmail>{email}</UserEmail>
  </User>
);
