import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.FORM_PADDING}px;
  min-height: ${(props) => props.theme.MIN_FORM_HEIGHT}px;
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
  border-radius: ${(props) => props.theme.MODAl_RADIUS}px;
  z-index: ${(props) => props.theme.LOADER_Z_INDEX};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.TITLE_SIZE}px;
  font-weight: ${(props) => props.theme.MEDIUM_FONT_WEIGHT};
  margin-bottom: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM}px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: ${(props) => props.theme.INPUT_MARGIN_BOTTOM}px;
  height: ${(props) => props.theme.MEDIUM_INPUT_HEIGHT}px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.INPUT_BORDER_RADIUS}px;
  padding-left: ${(props) => props.theme.INPUT_PADDING}px;
  padding-right: ${(props) => props.theme.INPUT_PADDING}px;
  font-size: ${(props) => props.theme.INPUT_FONT_SIZE}px;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.BUTTON_FONT_SIZE}px;
  height: ${(props) => props.theme.TEXT_HEIGHT}px;
`;

export const ErrorText = styled(Text)`
  color: ${(props) => props.theme.ERROR_COLOR};
  margin-bottom: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM}px;
`;

export const Button = styled.button`
  width: ${(props) => props.theme.FORM_BUTTON_WIDTH}px;
  background: ${(props) => props.theme.BLUE_COLOR};
  border-radius: ${(props) => props.theme.MODAl_RADIUS}px;
  height: ${(props) => props.theme.FORM_BUTTON_HEIGHT}px;
  color: ${(props) => props.theme.WHITE_COLOR};
  border: none;
  font-size: ${(props) => props.theme.BUTTON_FONT_SIZE}px;
  margin-left: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM * 2}px;

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
  margin-right: ${(props) => props.theme.DATE_PICKER_MARGIN_BOTTOM}px;
  min-width: ${(props) => props.theme.MIN_SELECTOR_WIDTH}px;
`;

export const SelectorsContainer = styled(ButtonsContainer)`
  justify-content: start;
  margin-bottom: ${(props) => props.theme.INPUT_MARGIN_BOTTOM}px;
`;
