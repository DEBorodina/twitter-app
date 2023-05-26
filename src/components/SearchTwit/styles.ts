import styled from 'styled-components';

export const TwitContainer = styled.li`
  padding: 10px;
  background: ${(props) => props.theme.inputColor};
  border-radius: 10px;
  margin-bottom: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
`;
export const Date = styled.p`
  font-size: 10px;
  opacity: 0.5;
`;
