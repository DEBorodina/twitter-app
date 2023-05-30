import { useMemo, useState } from 'react';

import { icons } from '@/constants/icons';

import { Loader } from '../Loader';
import {
  Container,
  Input,
  Menu,
  SearchButton,
  SearchContainer,
  Text,
  UsersList,
} from './styles';
import { SearchSideBarProps } from './types';

export const SearchSideBar = <T extends { id: string }>({
  placeholder,
  fetchData,
  ListItem,
  errorStatus,
  innerRef,
}: SearchSideBarProps<T>) => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setStatus('');
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) {
      setUsers([]);
      return;
    }

    setIsLoading(true);

    const newUsers = await fetchData(search);
    setUsers(newUsers);

    if (newUsers.length === 0) {
      setStatus(errorStatus);
    } else {
      setStatus('');
    }

    setIsLoading(false);
  };

  const itemsList = useMemo(
    () => users.map((data) => <ListItem {...data} key={data.id} />),
    [users]
  );

  return (
    <Menu ref={innerRef}>
      <Container>
        <SearchContainer onSubmit={handleSearch}>
          <SearchButton type="submit" aria-label="search-button">
            {icons.search}
          </SearchButton>
          <Input placeholder={placeholder} value={search} onChange={onChange} />
        </SearchContainer>
        {isLoading ? (
          <Loader />
        ) : status ? (
          <Text>{status}</Text>
        ) : (
          <UsersList>{itemsList}</UsersList>
        )}
      </Container>
    </Menu>
  );
};
