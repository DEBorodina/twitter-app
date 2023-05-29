import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: ${(props) => props.theme.TWIT_MIN_HEIGHT}px;
  padding-top: ${(props) => props.theme.TWIT_MARGIN}px;
  padding-bottom: ${(props) => props.theme.TWIT_MARGIN}px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

export const Container = styled.form`
  width: ${(props) => props.theme.TWIT_WIDTH}%;
  margin: 0 auto;
`;

export const Data = styled.p`
  display: flex;
`;

export const UserName = styled.span`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE}px;
  font-weight: ${(props) => props.theme.BOLD_FONT_WEIGHT};
  margin-right: ${(props) => props.theme.TWIT_MARGIN}px;
`;

export const UserEmail = styled.span`
  font-size: ${(props) => props.theme.TWIT_FONT_SIZE}px;
  opacity: 0.7;
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.TWIT_MARGIN * 2}px;
  border: none;
  outline: none;
  height: ${(props) => props.theme.TEXT_AREA_HEIGHT / 2}px;
  resize: none;
  margin-top: ${(props) => props.theme.TWIT_MARGIN}px;
  background: transparent;
  color: ${(props) => props.theme.textColor};

  &::placeholder {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.TWIT_MARGIN}px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Label = styled.label`
  margin-right: ${(props) => props.theme.TWIT_MARGIN}px;

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
  width: ${(props) => props.theme.FORM_BUTTON_WIDTH}px;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.INPUT_BUTTON_BORDER_RADIUS}px;
  height: ${(props) => props.theme.FORM_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-size: ${(props) => props.theme.TWIT_FORM_FONT_SIZE}px;
  margin-left: ${(props) => props.theme.TWIT_MARGIN * 2}px;
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
  font-size: ${(props) => props.theme.TWIT_FORM_FONT_SIZE - 2}px;
  height: ${(props) => props.theme.TEXT_HEIGHT}px;
`;
