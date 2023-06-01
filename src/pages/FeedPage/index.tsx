import { useMemo } from 'react';

import { Loader } from '@/components/Loader';
import { SearchSideBar } from '@/components/SearchSideBar';
import { SearchUser } from '@/components/SearchUser';
import { SideMenu } from '@/components/SideMenu';
import { Twit } from '@/components/Twit';
import { icons } from '@/constants/icons';
import { useFirebaseHelper, useSideMenus } from '@/hooks';
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
  const [twits, isLoading, fetchData] = useFirebaseHelper(
    TwitsHelper.getAllTwits
  );
  const [menu, search] = useSideMenus();

  const twitsList = useMemo(
    () =>
      twits.map(({ authorName, text, createdAt, id, authorEmail, image }) => (
        <Twit
          authorName={authorName}
          authorEmail={authorEmail}
          text={text}
          createdAt={createdAt}
          id={id}
          key={id}
          image={image}
        />
      )),
    [twits]
  );

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
            twitsList
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
