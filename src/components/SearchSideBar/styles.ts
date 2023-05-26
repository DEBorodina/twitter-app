import styled from 'styled-components';

export const Menu = styled.div`
  position: relative;
  z-index: 100;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 20%;
  min-width: 220px;
  min-height: 100vh;
  border-left: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  position: fixed;
  top: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SearchContainer = styled.form`
  margin: 0 auto;
  width: 90%;
  height: 40px;
  background: ${(props) => props.theme.inputColor};
  border-radius: 31px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 12px;
  margin: auto;
  height: 16px;
  padding-left: 10px;
  width: 90%;
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
  width: 90%;
`;

export const Text = styled.p`
  opacity: 0.7;
`;
