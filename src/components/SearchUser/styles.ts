import styled from 'styled-components';

export const User = styled.li`
  width: 100%;
  padding: ${(props) => props.theme.SEARCH_PADDING}px;
  background: ${(props) => props.theme.inputColor};
  border-radius: ${(props) => props.theme.SEARCH_TWIT_RADIUS}px;
  margin-bottom: ${(props) => props.theme.SEARCH_PADDING / 2}px;
`;

export const UserName = styled.p`
  font-size: ${(props) => props.theme.SEARCH_FONT_SIZE}px;
  color: ${(props) => props.theme.textColor};
`;
export const UserEmail = styled.p`
  font-size: ${(props) => props.theme.SEARCH_FONT_SIZE - 2}px;
  opacity: 0.5;
`;
