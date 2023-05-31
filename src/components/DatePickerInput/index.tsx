import { useState } from 'react';

import { Selector } from '@/components/Selector';
import { monthNames } from '@/constants/monthNames';
import { DataHelper } from '@/utils/DataHelper';

import { DataSelectors, Label } from './styles';
import { DatePickerInputProps } from './types';

const days = DataHelper.getDays();
const years = DataHelper.getYears();

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  onChange,
}) => {
  const [date, setDate] = useState<{
    month: null | number;
    year: null | number;
    day: null | number;
  }>({ month: null, year: null, day: null });

  const onMonthChange = (option: string) => {
    setDate((date) => {
      const month = monthNames.findIndex((monthName) => monthName === option);
      const { year, day } = date;
      if (day !== null) {
        const daysInAMonth = new Date(year || 0, month + 1, 0).getDate();
        if (daysInAMonth < day) {
          return { ...date };
        }
      }
      const newDate = { ...date, month };
      if (day && year) {
        onChange(new Date(year, month, day).getTime());
      }
      return newDate;
    });
  };

  const onDayChange = (option: string) => {
    setDate((date) => {
      const { year, month } = date;
      if (month !== null) {
        const daysInAMonth = new Date(year || 0, month + 1, 0).getDate();
        if (daysInAMonth < +option) {
          return { ...date };
        }
      }
      const day = +option;
      const newDate = { ...date, day };
      if (year && month !== null) {
        onChange(new Date(year, month, day).getTime());
      }
      return newDate;
    });
  };

  const onYearChange = (option: string) => {
    setDate((date) => {
      const { day, month } = date;
      if (day !== null && month !== null) {
        const daysInAMonth = new Date(+option, month + 1, 0).getDate();
        if (daysInAMonth < day) {
          return { ...date };
        }
      }
      const year = +option;
      const newDate = { ...date, year };
      if (day && month !== null) {
        onChange(new Date(year, month, day).getTime());
      }
      return newDate;
    });
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
          value={date.month !== null ? monthNames[date.month] : ''}
        />
        <Selector
          width="25%"
          placeholder="Day"
          options={days}
          onClick={onDayChange}
          value={date.day ? String(date.day) : ''}
        />
        <Selector
          width="25%"
          placeholder="Year"
          options={years}
          onClick={onYearChange}
          value={date.year ? String(date.year) : ''}
        />
      </DataSelectors>
    </>
  );
};
