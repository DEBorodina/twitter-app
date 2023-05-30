import { useMemo } from 'react';

import { footerLinks } from '@/constants/footerLinks';
import { icons } from '@/constants/icons';
import { ROUTE_NAMES } from '@/constants/routesNames';
import { useAppDispatch } from '@/hooks';
import { signInWithGoogle } from '@/store/actions/authActions';

import {
  Button,
  ButtonLink,
  ButtonWithIconContainer,
  Container,
  Content,
  Footer,
  FooterList,
  FooterListItem,
  FooterListItemLink,
  Image,
  Main,
  SubTitle,
  Text,
  TextLink,
  Title,
} from './styles';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const signUpWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const footerLinksItems = useMemo(
    () =>
      footerLinks.map(({ name, to }) => (
        <FooterListItem key={name}>
          <FooterListItemLink to={to}>{name}</FooterListItemLink>
        </FooterListItem>
      )),
    []
  );

  return (
    <Container>
      <Main>
        <Image />
        <Content>
          {icons.twitter}
          <Title>Happening now</Title>
          <SubTitle>Join Twitter today</SubTitle>
          <Button onClick={signUpWithGoogle}>
            <ButtonWithIconContainer>
              {icons.google}Sign up with Google
            </ButtonWithIconContainer>
          </Button>
          <ButtonLink to={ROUTE_NAMES.SIGN_UP}>Sign up with email</ButtonLink>
          <Text>
            By singing up you agree to the
            <TextLink to="#"> Terms of Service </TextLink> and
            <TextLink to="#"> Privacy Policy</TextLink>, including
            <TextLink to="#"> Cookie Use</TextLink>.
          </Text>
          <Text>
            Already have an account?
            <TextLink to={ROUTE_NAMES.LOGIN}> Log in</TextLink>
          </Text>
        </Content>
      </Main>
      <Footer>
        <FooterList>
          {footerLinksItems}
          <FooterListItem>© 2021 Twitter, Inc.</FooterListItem>
        </FooterList>
      </Footer>
    </Container>
  );
};
