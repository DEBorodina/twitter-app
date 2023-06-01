import { useState } from 'react';

import { Selector } from '@/components/Selector';
import { monthNames } from '@/constants/monthNames';
import { DataHelper } from '@/utils/DataHelper';

import { DataSelectors, Label } from './styles';
import { DatePickerInputProps, IDate } from './types';

const days = DataHelper.getDays();
const years = DataHelper.getYears();

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  onChange,
}) => {
  const [date, setDate] = useState<IDate>({
    month: null,
    year: null,
    day: null,
  });

  const onSelectorChange = (key: keyof IDate) => (option: string) => {
    setDate((date) => {
      const newDate = { ...date };

      if (key === 'month') {
        newDate[key] = monthNames.findIndex(
          (monthName) => monthName === option
        );
      } else {
        newDate[key] = +option;
      }

      const { year, month, day } = newDate;

      if (DataHelper.isValidDate(year, month, day)) {
        if (year && month !== null && day !== null) {
          onChange(new Date(year, month, day).getTime());
        }
        return newDate;
      }

      return date;
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
          onClick={onSelectorChange('month')}
          value={date.month !== null ? monthNames[date.month] : ''}
        />
        <Selector
          width="25%"
          placeholder="Day"
          options={days}
          onClick={onSelectorChange('day')}
          value={date.day ? String(date.day) : ''}
        />
        <Selector
          width="25%"
          placeholder="Year"
          options={years}
          onClick={onSelectorChange('year')}
          value={date.year ? String(date.year) : ''}
        />
      </DataSelectors>
    </>
  );
};
