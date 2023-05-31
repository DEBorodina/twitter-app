export interface DatePickerInputProps {
  onChange: (date: number) => void;
}

export interface IDate {
  month: null | number;
  year: null | number;
  day: null | number;
}
