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
  height: calc(100vh - ${(props) => props.theme.MAIN_FOOTER_HEIGHT}px);
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  background-image: url(${imagePath});
  background-repeat: no-repeat;

  background-size: 100vh;
  height: calc(100vh - ${(props) => props.theme.MAIN_FOOTER_HEIGHT}px);
  width: 100vh;

  @media (max-width: 1000px) {
    background-position: right ${(props) => props.theme.MAIN_IMAGE_OFFSET}vh top
      0px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: auto;
  width: 30%;
  min-width: ${(props) => props.theme.MAIN_MIN_CONTENT_WIDTH}px;
  padding-left: ${(props) => props.theme.MAIN_CONTENT_PADDING}px;
  padding-right: ${(props) => props.theme.MAIN_CONTENT_PADDING}px;
`;

export const ButtonCss = css`
  width: ${(props) => props.theme.AUTH_BUTTON_WIDTH}px;
  height: ${(props) => props.theme.AUTH_BUTTON_HEIGHT}px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.AUTH_BUTTON_RADIUS}px;
  background-color: transparent;
  display: block;
  margin-bottom: ${(props) => props.theme.MAIN_CONTENT_PADDING}px;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  font-size: ${(props) => props.theme.AUTH_BUTTON_FONT_SIZE}px;

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
  width: ${(props) => props.theme.AUTH_BUTTON_WITH_ICON_WIDTH}%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.MAIN_TITLE_MARGIN}px;
  margin-bottom: ${(props) => props.theme.MAIN_TITLE_MARGIN}px;
  font-size: ${(props) => props.theme.MAIN_TITLE_FONT_SIZE}px;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.BOLD_FONT_WEIGHT};
`;

export const SubTitle = styled.h2`
  ${Title}
  font-size: ${(props) => props.theme.MAIN_SUBTITLE_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.MAIN_SUBTITLE_MARGIN}px;
`;

export const Text = styled.p`
  margin-bottom: ${(props) => props.theme.MAIN_TEXT_FONT_SIZE}px;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  font-size: ${(props) => props.theme.MAIN_TEXT_FONT_SIZE}px;
  line-height: ${(props) => props.theme.MAIN_TEXT_LINE_HEIGHT}px;
`;

export const TextLink = styled(Link)`
  margin-bottom: ${(props) => props.theme.MAIN_TEXT_MARGIN_BOTTOM}px;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  font-size: ${(props) => props.theme.MAIN_TEXT_FONT_SIZE}px;
  color: ${(props) => props.theme.BLUE_COLOR};

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
  max-width: ${(props) => props.theme.MAIN_FOOTER_WIDTH}%;
  display: flex;
  flex-wrap: wrap;
  height: ${(props) => props.theme.MAIN_FOOTER_HEIGHT}px;
`;

export const FooterListItem = styled.li`
  padding: ${(props) => props.theme.MAIN_FOOTER_PADDING}px;
  margin: auto 0;
  font-size: ${(props) => props.theme.MAIN_TEXT_FONT_SIZE}px;
`;

export const FooterListItemLink = styled(Link)`
  margin: 0 auto;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  color: ${(props) => props.theme.textColor};
`;
