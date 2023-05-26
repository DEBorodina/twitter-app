export interface SelectorProps extends DropDownProps {
  placeholder?: string;
  options: string[];
  onClick: (option: string) => void;
  value?: string;
}

export interface DropDownProps {
  width: number | string;
}

export interface SelectedOptionProps {
  $isPlaceHolder: boolean;
}
