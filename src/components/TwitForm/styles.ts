import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
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
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  background: ${(props) => props.theme.inputColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px;
  height: 100px;
  resize: none;

  &::placeholder {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Label = styled.label`
  margin-right: 10px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const FileInput = styled.input`
  display: none;
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

export const Text = styled.p`
  font-size: 12px;
  height: 18px;
`;

export const ErrorText = styled(Text)`
  color: red;
  margin-bottom: 10px;
`;
