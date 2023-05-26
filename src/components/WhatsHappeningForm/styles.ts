import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export const Container = styled.form`
  width: 90%;
  margin: 0 auto;
`;

export const Data = styled.p`
  display: flex;
`;

export const UserName = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
`;

export const UserEmail = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  border: none;
  outline: none;
  height: 50px;
  resize: none;
  margin-top: 10px;
  background: transparent;
  color: ${(props) => props.theme.textColor};

  &::placeholder {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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

export interface ButtonProps {
  $disabled: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: 70px;
  background: #1da1f2;
  border-radius: 20px;
  height: 30px;
  color: #ffffff;
  border: none;
  font-size: 14px;
  margin-left: 20px;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};

  ${(props) =>
    props.$disabled
      ? ''
      : `
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
  `};
`;

export const Text = styled.p`
  font-size: 12px;
  height: 18px;
`;
