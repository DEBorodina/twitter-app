import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.div`
  z-index: 100;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 20%;
  min-width: 220px;
  min-height: 100vh;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.nav`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
`;

export const MenuList = styled.ul`
  margin-top: 50px;
  width: 100%;
  margin-bottom: 40px;
`;

export const MenuItem = styled.li`
  margin-bottom: 34px;
  width: 100%;
`;

export const MenuLink = styled(Link)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 80%;
`;

export interface TextProps {
  $isSelected: boolean;
}

export const Text = styled.span<TextProps>`
  color: ${(props) => props.theme.textColor};
  font-weight: ${(props) => (props.$isSelected ? 600 : 400)};
  font-size: 16px;
  margin-left: 20px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;

  & svg * {
    fill: ${(props) => props.theme.textColor};
  }
`;

export const TwitButton = styled.button`
  width: 90%;
  background: #1da1f2;
  border-radius: 76px;
  height: 50px;
  color: #ffffff;
  border: none;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 40px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  background: transparent;
  width: 80%;
  align-items: center;
  display: flex;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
  }
`;
