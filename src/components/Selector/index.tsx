import { useLayoutEffect, useMemo, useState } from 'react';

import { icons } from '@/constants/icons';
import { usePopup } from '@/hooks';

import {
  DropDown,
  Option,
  OptionList,
  SelectedButton,
  SelectedOption,
} from './styles';
import { SelectorProps } from './types';

export const Selector: React.FC<SelectorProps> = ({
  width,
  placeholder,
  options,
  onClick,
  value,
}) => {
  const [ref, isOpen, setIsOpen] = usePopup();
  const [selectedValue, setSelectedValue] = useState(value);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSelectOption = (option: string) => () => {
    onClick(option);
    setSelectedValue(option);
    setIsOpen(false);
  };

  const optionsItems = useMemo(
    () =>
      options.map((option) => (
        <Option key={option} onClick={handleSelectOption(option)}>
          {option}
        </Option>
      )),
    [options]
  );

  useLayoutEffect(() => {
    if (selectedValue !== value) {
      setSelectedValue(value);
    }
  });

  return (
    <DropDown width={width} ref={ref as React.RefObject<HTMLDivElement>}>
      <SelectedButton onClick={handleClick} aria-label="selector-button">
        <SelectedOption $isPlaceHolder={!selectedValue}>
          {selectedValue || placeholder}
        </SelectedOption>
        {icons.arrow}
      </SelectedButton>
      {isOpen && <OptionList>{optionsItems}</OptionList>}
    </DropDown>
  );
};
