import styled from 'styled-components';

import { DropDownProps, SelectedOptionProps } from './types';

export const DropDown = styled.div<DropDownProps>`
  width: ${(props) => props.width};
  position: relative;
`;

export const SelectedButton = styled.button`
  width: 100%;
  height: 50px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
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
  font-size: 14px;
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.$isPlaceHolder ? 0.6 : 1)};
`;

export const OptionList = styled.ul`
  display: block;
  position: absolute;
  width: 100%;
  top: 45px;
  left: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.backgroundColor};
  z-index: 100;
  max-height: 120px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: ${(props) => props.theme.textColor}10;
    border-bottom-right-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textColor}20;
    border-radius: 10px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
  }
`;

export const Option = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  z-index: 101;

  &:first-child {
    border-top: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
