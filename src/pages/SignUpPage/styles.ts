import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.form`
  width: ${(props) => props.theme.LOGIN_CONTAINER_WIDTH}%;
  min-width: ${(props) => props.theme.LOGIN_CONTAINER_MIN_WIDTH}px;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.LOGIN_CONTAINER_MARGIN_TOP}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

export const Title = styled.h1`
  width: 100%;
  margin-top: ${(props) => props.theme.SIGN_UP_TITLE_TOP}px;
  margin-bottom: ${(props) => props.theme.SIGN_UP_TITLE_BOTTOM}px;
  font-size: ${(props) => props.theme.SIGN_UP_BOTTOM_FONT_SIZE}px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: ${(props) => props.theme.INPUT_MARGIN_BOTTOM}px;
  height: ${(props) => props.theme.MEDIUM_INPUT_HEIGHT}px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.INPUT_BORDER_RADIUS}px;
  padding-left: ${(props) => props.theme.INPUT_PADDING}px;
  padding-right: ${(props) => props.theme.INPUT_PADDING}px;
  font-size: ${(props) => props.theme.INPUT_FONT_SIZE}px;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.TWIT_BUTTON_BORDER_RADIUS}px;
  height: ${(props) => props.theme.TWIT_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-size: ${(props) => props.theme.SIGN_UP_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.SIGN_UP_TITLE_TOP}px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.BLUE_COLOR};
  font-size: ${(props) => props.theme.SIGN_UP_FONT_SIZE}px;
  text-align: right;
  width: 100%;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.ERROR_COLOR};
  font-size: ${(props) => props.theme.ERROR_TEXT_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.ERROR_TEXT_MARGIN_BOTTOM}px;
  height: ${(props) => props.theme.ERROR_TEXT_HEIGHT}px;
  width: 100%;
`;
