import { useEffect, useState } from 'react';

import { Loader } from '@/components/Loader';
import { SearchSideBar } from '@/components/SearchSideBar';
import { SearchUser } from '@/components/SearchUser';
import { SideMenu } from '@/components/SideMenu';
import { Twit } from '@/components/Twit';
import { icons } from '@/constants/icons';
import { useSideMenus } from '@/hooks';
import { ITwitDataWithUserWithId } from '@/types';
import { TwitsHelper } from '@/utils/TwitsHelper';
import { UserHelper } from '@/utils/UserHelper';

import {
  Container,
  FeedContainer,
  FeedTitle,
  Header,
  LoaderContainer,
  ModalButton,
  TwitsContainer,
} from './styles';

export const FeedPage = () => {
  const [twits, setTwits] = useState([] as ITwitDataWithUserWithId[]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const twits = await TwitsHelper.getAllTwits();
    setIsLoading(false);
    setTwits(twits);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [menu, search] = useSideMenus();

  return (
    <Container>
      {menu.isOpen && <SideMenu onDone={fetchData} ref={menu.ref} />}
      <FeedContainer>
        <Header>
          <ModalButton onClick={menu.onOpen}> {icons.burger}</ModalButton>
          <FeedTitle>Home</FeedTitle>
          <ModalButton onClick={search.onOpen}> {icons.search}</ModalButton>
        </Header>
        <TwitsContainer>
          {isLoading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            twits.map(
              ({ authorName, text, createdAt, id, authorEmail, image }) => (
                <Twit
                  authorName={authorName}
                  authorEmail={authorEmail}
                  text={text}
                  createdAt={createdAt}
                  id={id}
                  key={id}
                  image={image}
                />
              )
            )
          )}
        </TwitsContainer>
      </FeedContainer>
      {search.isOpen && (
        <SearchSideBar
          placeholder="Search Users"
          fetchData={UserHelper.getUsersBySearch}
          ListItem={SearchUser}
          errorStatus="No Such Users"
          innerRef={search.ref}
        />
      )}
    </Container>
  );
};
