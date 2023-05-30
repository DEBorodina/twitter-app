import styled from 'styled-components';

export const Menu = styled.div`
  z-index: ${(props) => props.theme.SIDE_BAR_Z_INDEX};
  background-color: ${(props) => props.theme.backgroundColor};
  width: ${(props) => props.theme.SIDE_BAR_WIDTH}%;
  min-width: ${(props) => props.theme.SIDE_BAR_MIN_WIDTH}px;
  min-height: ${(props) => props.theme.SIDE_BAR_MIN_HEIGHT}vh;
  border-left: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  position: fixed;
  top: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.SIDE_BAR_MARGIN_TOP}px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SearchContainer = styled.form`
  margin: 0 auto;
  width: ${(props) => props.theme.SEARCH_WIDTH}%;
  height: ${(props) => props.theme.SEARCH_HEIGHT}px;
  background: ${(props) => props.theme.inputColor};
  border-radius: ${(props) => props.theme.SEARCH_RADIUS}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.SEARCH_PADDING}px;
  padding-right: ${(props) => props.theme.SEARCH_PADDING}px;
  margin-bottom: ${(props) => props.theme.SEARCH_PADDING * 2}px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${(props) => props.theme.SEARCH_FONT_SIZE}px;
  margin: auto;
  height: ${(props) => props.theme.INPUT_HEIGHT}px;
  padding-left: ${(props) => props.theme.SEARCH_PADDING}px;
  width: ${(props) => props.theme.SEARCH_WIDTH}%;
  color: ${(props) => props.theme.textColor};

  &::placeholder {
    opacity: 0.7;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  & svg * {
    fill: ${(props) => props.theme.textColor};
    opacity: 0.7;
  }
`;

export const UsersList = styled.ul`
  margin: 0 auto;
  width: ${(props) => props.theme.SEARCH_WIDTH}%;
`;

export const Text = styled.p`
  opacity: 0.7;
`;
