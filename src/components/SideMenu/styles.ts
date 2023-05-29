import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  z-index: ${(props) => props.theme.SIDE_BAR_Z_INDEX};
  background-color: ${(props) => props.theme.backgroundColor};
  width: ${(props) => props.theme.SIDE_BAR_WIDTH}%;
  min-width: ${(props) => props.theme.SIDE_BAR_MIN_WIDTH}px;
  min-height: ${(props) => props.theme.SIDE_BAR_MIN_HEIGHT}vh;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.nav`
  width: ${(props) => props.theme.MENU_WIDTH}%;
  margin: 0 auto;
  margin-top: ${(props) => props.theme.MENU_MARGIN * 3}px;
`;

export const MenuList = styled.ul`
  margin-top: ${(props) => props.theme.MENU_MARGIN * 5}px;
  width: 100%;
  margin-bottom: ${(props) => props.theme.MENU_MARGIN * 4}px;
`;

export const MenuItem = styled.li`
  margin-bottom: ${(props) => props.theme.MENU_MARGIN * 3}px;
  width: 100%;
`;

export const MenuLink = styled(Link)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: ${(props) => props.theme.MENU_WIDTH}%;
`;

export interface TextProps {
  $isSelected: boolean;
}

export const Text = styled.span<TextProps>`
  color: ${(props) => props.theme.textColor};
  font-weight: ${(props) => (props.$isSelected ? 600 : 400)};
  font-size: ${(props) => props.theme.MENU_FONT_SIZE}px;
  margin-left: ${(props) => props.theme.MENU_MARGIN * 2}px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.theme.ICON_WIDTH}%;

  & svg * {
    fill: ${(props) => props.theme.textColor};
  }
`;

export const TwitButton = styled.button`
  width: ${(props) => props.theme.TWIT_BUTTON_WIDTH}%;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.TWIT_BUTTON_BORDER_RADIUS}px;
  height: ${(props) => props.theme.TWIT_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-weight: ${(props) => props.theme.BOLD_FONT_WEIGHT};
  font-size: ${(props) => props.theme.MENU_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.MENU_MARGIN * 4}px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  font-size: ${(props) => props.theme.MENU_FONT_SIZE}px;
  margin-bottom: ${(props) => props.theme.MENU_MARGIN * 2}px;
  background: transparent;
  width: ${(props) => props.theme.MENU_WIDTH}%;
  align-items: center;
  display: flex;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }
`;
