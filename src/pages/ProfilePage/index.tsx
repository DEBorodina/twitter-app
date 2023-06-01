import { useMemo } from 'react';

import { Loader } from '@/components/Loader';
import { ProfileHeader } from '@/components/ProfileHeader';
import { SearchSideBar } from '@/components/SearchSideBar';
import { SearchTwit } from '@/components/SearchTwit';
import { SideMenu } from '@/components/SideMenu';
import { Twit } from '@/components/Twit';
import { WhatsHappeningForm } from '@/components/WhatsHappeningForm';
import { useAppSelector, useFirebaseHelper, useSideMenus } from '@/hooks';
import { IUserData } from '@/types';
import { TwitsHelper } from '@/utils/TwitsHelper';

import {
  Container,
  FeedContainer,
  LoaderContainer,
  TwitsContainer,
} from './styles';

export const ProfilePage = () => {
  const [twits, isLoading, fetchData] = useFirebaseHelper(
    TwitsHelper.getUserTwits
  );
  const [menu, search] = useSideMenus();

  const { name, email, gender, telegram, isLoaded } = useAppSelector(
    (state) => state.firebase.profile
  );
  const user = { name, email, gender, telegram, isLoaded };

  const twitsListItems = useMemo(
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
      {menu.isOpen && <SideMenu ref={menu.ref} onDone={fetchData} />}
      <FeedContainer>
        {user.isLoaded ? (
          <>
            <ProfileHeader
              onProfileUpdate={fetchData}
              user={user}
              onMenuOpen={menu.onOpen}
              onSearchOpen={search.onOpen}
            />
            <WhatsHappeningForm
              onAddNewTwit={fetchData}
              user={user as IUserData}
            />
          </>
        ) : (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        <TwitsContainer>
          {isLoading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            twitsListItems
          )}
        </TwitsContainer>
      </FeedContainer>
      {search.isOpen && (
        <SearchSideBar
          placeholder="Search Twits"
          ListItem={SearchTwit}
          fetchData={TwitsHelper.getTwitsBySearch}
          errorStatus="No Twits Found"
          innerRef={search.ref}
        />
      )}
    </Container>
  );
};
