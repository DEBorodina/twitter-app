import styled from 'styled-components';

export const Header = styled.header`
  width: ${(props) => props.theme.HEADER_WIDTH}%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.HEADER_MARGIN_BOTTOM}px;
`;

export const User = styled.div`
  width: 80%;
  margin-left: 10px;
`;

export const UserName = styled.h1`
  font-size: 24px;
  width: 90%;

  @media (max-width: 820px) {
    font-size: 20px;
  }
`;

export const UserEmail = styled.h2`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;

  @media (max-width: 800px) {
    font-size: 10px;
  }
`;

export const EditButton = styled.button`
  background: transparent;
  width: ${(props) => props.theme.EDIT_BUTTON_WIDTH}px;
  height: ${(props) => props.theme.EDIT_BUTTON_HEIGHT}px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.MODAl_RADIUS}px;
  margin-right: ${(props) => props.theme.EDIT_BUTTON_MARGIN_RIGHT}px;
  font-size: ${(props) => props.theme.EDIT_BUTTON_FONT_SIZE}px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.EDIT_BUTTON_FONT_SIZE - 2}px;
  }
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  display: none;

  @media (max-width: 820px) {
    display: block;
  }

  & svg * {
    fill: ${(props) => props.theme.textColor};
  }
`;
