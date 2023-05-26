import { useEffect, useState } from 'react';

import { icons } from '@/constants/icons';
import { usePopup } from '@/hooks';

import {
  DropDown,
  DropDownProps,
  Option,
  OptionList,
  SelectedButton,
  SelectedOption,
} from './styles';

export interface SelectorProps extends DropDownProps {
  placeholder?: string;
  options: string[];
  onClick: (option: string) => void;
  value?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  width,
  placeholder,
  options,
  onClick,
  value,
}) => {
  const [ref, isOpen, setIsOpen] = usePopup();
  const [selectedValue, setSelectedValue] = useState(value);
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectOption = (option: string) => () => {
    onClick(option);
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <DropDown width={width} ref={ref as React.RefObject<HTMLDivElement>}>
      <SelectedButton onClick={handleClick}>
        <SelectedOption $isPlaceHolder={!selectedValue}>
          {selectedValue || placeholder}
        </SelectedOption>
        {icons.arrow}
      </SelectedButton>
      {isOpen && (
        <OptionList>
          {options.map((option) => (
            <Option key={option} onClick={handleSelectOption(option)}>
              {option}
            </Option>
          ))}
        </OptionList>
      )}
    </DropDown>
  );
};
