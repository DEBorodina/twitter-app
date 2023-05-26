import { useEffect, useState } from 'react';

import { Loader } from '@/components/Loader';
import { ProfileHeader } from '@/components/ProfileHeader';
import { SearchSideBar } from '@/components/SearchSideBar';
import { SearchTwit } from '@/components/SearchTwit';
import { SideMenu } from '@/components/SideMenu';
import { Twit } from '@/components/Twit';
import { WhatsHappeningForm } from '@/components/WhatsHappeningForm';
import { useAppSelector, useSideMenus } from '@/hooks';
import { ITwitDataWithUserWithId } from '@/types';
import { TwitsHelper } from '@/utils/TwitsHelper';

import {
  Container,
  FeedContainer,
  LoaderContainer,
  TwitsContainer,
} from './styles';

export const ProfilePage = () => {
  const [twits, setTwits] = useState([] as ITwitDataWithUserWithId[]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const twits = await TwitsHelper.getUserTwits();
    setIsLoading(false);
    setTwits(twits);
  };

  const [menu, search] = useSideMenus();

  useEffect(() => {
    fetchData();
  }, []);

  const user = useAppSelector((state) => state.firebase.profile);

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
            <WhatsHappeningForm onAddNewTwit={fetchData} user={user} />
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
