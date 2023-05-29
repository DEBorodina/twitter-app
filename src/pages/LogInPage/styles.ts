import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.form`
  width: ${(props) => props.theme.LOGIN_CONTAINER_WIDTH}%;
  min-width: ${(props) => props.theme.LOGIN_CONTAINER_MIN_WIDTH}px;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.LOGIN_CONTAINER_MARGIN_TOP}px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
`;

export const Title = styled.h1`
  margin-top: ${(props) => props.theme.LOGIN_TITLE_MARGIN}px;
  margin-bottom: ${(props) => props.theme.LOGIN_TITLE_MARGIN}px;
  font-size: ${(props) => props.theme.LOGIN_TITLE_FONT_SIZE}px;
  font-family: 'Roboto', sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: ${(props) => props.theme.LOGIN_INPUT_MARGIN}px;
  height: ${(props) => props.theme.LOGIN_INPUT_HEIGHT}px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.LOGIN_INPUT_RADIUS}px;
  padding-left: ${(props) => props.theme.LOGIN_INPUT_MARGIN}px;
  padding-right: ${(props) => props.theme.LOGIN_INPUT_MARGIN}px;
  font-size: ${(props) => props.theme.LOGIN_INPUT_FONT_SIZE}px;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.TWIT_BUTTON_BORDER_RADIUS}px;
  height: ${(props) => props.theme.LOGIN_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  font-size: ${(props) => props.theme.LOGIN_INPUT_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.LOGIN_BUTTON_MARGIN}px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.BLUE_COLOR};
  font-size: ${(props) => props.theme.LOGIN_INPUT_FONT_SIZE}px;
  text-align: right;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.ERROR_COLOR};
  font-size: ${(props) => props.theme.ERROR_TEXT_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.ERROR_TEXT_MARGIN_BOTTOM}px;
  height: ${(props) => props.theme.ERROR_TEXT_HEIGHT}px;
`;
