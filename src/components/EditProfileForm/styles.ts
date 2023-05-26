import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 300px;
  color: ${(props) => props.theme.textColor};
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor}aa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 200;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 25px;
  height: 50px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 6px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  height: 18px;
`;

export const ErrorText = styled(Text)`
  color: red;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 70px;
  background: #1da1f2;
  border-radius: 20px;
  height: 30px;
  color: #ffffff;
  border: none;
  font-size: 14px;
  margin-left: 20px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const SelectorWithLabel = styled.div`
  width: 30%;
  margin-right: 10px;
  min-width: 100px;
`;

export const SelectorsContainer = styled(ButtonsContainer)`
  justify-content: start;
  margin-bottom: 25px;
`;
