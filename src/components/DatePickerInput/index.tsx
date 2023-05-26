import { useState } from 'react';

import { Selector } from '@/components/Selector';
import { monthNames } from '@/constants/monthNames';

import { DataSelectors, Label } from './styles';
import { DatePickerInputProps } from './types';

const years = new Array(new Date().getFullYear() - 1900)
  .fill(0)
  .map((_, i) => `${new Date().getFullYear() - i}`);

const days = new Array(31).fill(0).map((_, i) => `${i + 1}`);

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  onChange,
}) => {
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);
  const [year, setYear] = useState<number | null>(null);

  const createDate = (
    year: number | null,
    month: number | null,
    day: number | null
  ) => {
    if (month !== null && day && year) {
      return new Date(year, month, day);
    }
    return null;
  };

  const onMonthChange = (option: string) => {
    const month = monthNames.findIndex((monthName) => monthName === option);
    if (day !== null) {
      const daysInAMonth = new Date(year || 0, month + 1, 0).getDate();
      if (daysInAMonth < day) {
        return;
      }
    }
    setMonth(month);
    const newDate = createDate(year, month, day);
    if (newDate) onChange(newDate.getTime());
  };

  const onDayChange = (option: string) => {
    if (month !== null) {
      const daysInAMonth = new Date(year || 0, month + 1, 0).getDate();
      if (daysInAMonth < +option) {
        return;
      }
    }
    setDay(+option);
    const newDate = createDate(year, month, +option);
    if (newDate) onChange(newDate.getTime());
  };

  const onYearChange = (option: string) => {
    if (day !== null && month !== null) {
      const daysInAMonth = new Date(+option, month + 1, 0).getDate();
      if (daysInAMonth < day) {
        return;
      }
    }
    setYear(+option);
    const newDate = createDate(+option, month, day);
    if (newDate) onChange(newDate.getTime());
  };

  return (
    <>
      <Label>Date of birth</Label>
      <DataSelectors>
        <Selector
          width="40%"
          placeholder="Month"
          options={monthNames}
          onClick={onMonthChange}
          value={month !== null ? monthNames[month] : ''}
        />
        <Selector
          width="25%"
          placeholder="Day"
          options={days}
          onClick={onDayChange}
          value={day ? String(day) : ''}
        />
        <Selector
          width="25%"
          placeholder="Year"
          options={years}
          onClick={onYearChange}
          value={year ? String(year) : ''}
        />
      </DataSelectors>
    </>
  );
};
