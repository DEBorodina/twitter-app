import styled from 'styled-components';

export const User = styled.li`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.inputColor};
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const UserName = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.textColor};
`;
export const UserEmail = styled.p`
  font-size: 10px;
  opacity: 0.5;
`;
