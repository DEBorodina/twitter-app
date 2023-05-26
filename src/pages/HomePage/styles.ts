import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import imagePath from '@/assets/back-twitter.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.textColor};
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  background-image: url(${imagePath});
  background-repeat: no-repeat;

  background-size: 100vh;
  height: calc(100vh - 55px);
  width: 100vh;

  @media (max-width: 1000px) {
    background-position: right -15vh top 0px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: auto;
  width: 30%;
  min-width: 360px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonCss = css`
  width: 320px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 42px;
  background-color: transparent;
  display: block;
  margin-bottom: 21px;
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

export const Button = styled.button`
  ${ButtonCss}
`;

export const ButtonLink = styled(Link)`
  ${ButtonCss}
`;

export const ButtonWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 58%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 27px;
  margin-bottom: 26px;
  font-size: 46px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
`;

export const SubTitle = styled.h2`
  ${Title}
  font-size: 34px;
  margin-bottom: 31px;
`;

export const Text = styled.p`
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const TextLink = styled(Link)`
  margin-bottom: 21px;
  font-weight: 400;
  font-size: 14px;
  color: #1e97e1;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterList = styled.ul`
  margin: 0 auto;
  width: fit-content;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
  height: 55px;
`;

export const FooterListItem = styled.li`
  padding: 5px;
  margin: auto 0;
  font-size: 13px;
`;

export const FooterListItemLink = styled(Link)`
  margin: 0 auto;
  font-weight: 400;
  line-height: 15px;
  color: ${(props) => props.theme.textColor};
`;
