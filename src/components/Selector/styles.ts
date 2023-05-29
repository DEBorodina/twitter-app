import styled from 'styled-components';

import { DropDownProps, SelectedOptionProps } from './types';

export const DropDown = styled.div<DropDownProps>`
  width: ${(props) => props.width};
  position: relative;
`;

export const SelectedButton = styled.button`
  width: 100%;
  height: ${(props) => props.theme.SELECTOR_HEIGHT}px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.SELECTOR_PADDING / 2}px;
  padding-left: ${(props) => props.theme.SELECTOR_PADDING}px;
  padding-right: ${(props) => props.theme.SELECTOR_PADDING}px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  & svg * {
    fill: ${(props) => props.theme.textColor}aa;
  }
`;

export const SelectedOption = styled.span<SelectedOptionProps>`
  font-size: ${(props) => props.theme.SELECTOR_FONT_SIZE}px;
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.$isPlaceHolder ? 0.6 : 1)};
`;

export const OptionList = styled.ul`
  display: block;
  position: absolute;
  width: 100%;
  top: ${(props) => props.theme.SELECTOR_HEIGHT - 5}px;
  left: 0;
  border-bottom-left-radius: ${(props) => props.theme.SELECTOR_PADDING / 2}px;
  border-bottom-right-radius: ${(props) => props.theme.SELECTOR_PADDING / 2}px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.backgroundColor};
  z-index: ${(props) => props.theme.SELECTOR_Z_INDEX};
  max-height: ${(props) => props.theme.SELECTOR_MAX_HEIGHT}px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${(props) => props.theme.SCROLL_SIZE}px;
    height: ${(props) => props.theme.SCROLL_SIZE}px;
    background: ${(props) => props.theme.textColor}10;
    border-bottom-right-radius: ${(props) => props.theme.SCROLL_SIZE / 2}px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textColor}20;
    border-radius: ${(props) => props.theme.SCROLL_SIZE}px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: ${(props) => props.theme.WHITE_COLOR};
  }
`;

export const Option = styled.li`
  height: ${(props) => props.theme.SELECTOR_HEIGHT - 10}px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: ${(props) => props.theme.SELECTOR_FONT_SIZE}px;px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  z-index: ${(props) => props.theme.SELECTOR_Z_INDEX + 1}px;

  &:first-child {
    border-top: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
