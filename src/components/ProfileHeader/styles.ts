import styled from 'styled-components';

export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  width: 100px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 20px;
  margin-right: 10px;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
  display: none;

  @media (max-width: 820px) {
    display: block;
  }
`;
