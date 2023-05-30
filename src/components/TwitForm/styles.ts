import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.TWIT_FORM_PADDING * 2}px;
  min-height: ${(props) => props.theme.MIN_FORM_HEIGHT}px;
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
  border-radius: ${(props) => props.theme.MODAl_RADIUS}px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.TITLE_SIZE}px;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  margin-bottom: ${(props) => props.theme.TWIT_FORM_PADDING}px;
  color: ${(props) => props.theme.textColor};
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.TWIT_FORM_PADDING * 2}px;
  background: ${(props) => props.theme.inputColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.TEXT_AREA_BORDER_RADIUS}px;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.TWIT_FORM_PADDING}px;
  height: ${(props) => props.theme.TEXT_AREA_HEIGHT}px;
  resize: none;

  &::placeholder {
    opacity: 0.7;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.TWIT_FORM_PADDING * 2.5}px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Label = styled.label`
  margin-right: ${(props) => props.theme.TWIT_FORM_PADDING}px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  width: ${(props) => props.theme.FORM_BUTTON_WIDTH}px;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.INPUT_BUTTON_BORDER_RADIUS}px;
  height: ${(props) => props.theme.FORM_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-size: ${(props) => props.theme.TWIT_FORM_FONT_SIZE}px;
  margin-left: ${(props) => props.theme.TWIT_FORM_PADDING * 2}px;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.TWIT_FORM_FONT_SIZE - 2}px;
  height: ${(props) => props.theme.TEXT_HEIGHT}px;
`;

export const ErrorText = styled(Text)`
  color: ${(props) => props.theme.ERROR_COLOR};
  margin-bottom: ${(props) => props.theme.TWIT_FORM_PADDING}px;
`;
