import { fireEvent, render, screen } from '@testing-library/react';

import { DatePickerInput } from '.';

describe('Selector test', () => {
  it('Should display default date picker', () => {
    const onChange = jest.fn();
    render(<DatePickerInput onChange={onChange} />);
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Month')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
  });

  it('Should choose day', () => {
    const onChange = jest.fn();
    render(<DatePickerInput onChange={onChange} />);
    fireEvent.click(screen.getByText('Day'));
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.queryByText('Day')).not.toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
  });

  it('Should choose month', () => {
    const onChange = jest.fn();
    render(<DatePickerInput onChange={onChange} />);
    fireEvent.click(screen.getByText('Month'));
    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.getByText('February')).toBeInTheDocument();
    fireEvent.click(screen.getByText('January'));
    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.queryByText('February')).not.toBeInTheDocument();
    expect(screen.queryByText('Month')).not.toBeInTheDocument();
  });

  it('Should choose year', () => {
    const onChange = jest.fn();
    render(<DatePickerInput onChange={onChange} />);
    fireEvent.click(screen.getByText('Year'));
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    fireEvent.click(screen.getByText('2023'));
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.queryByText('2022')).not.toBeInTheDocument();
    expect(screen.queryByText('Year')).not.toBeInTheDocument();
  });

  it('Should choose the whole date', () => {
    const onChange = jest.fn();
    render(<DatePickerInput onChange={onChange} />);
    fireEvent.click(screen.getByText('Year'));
    fireEvent.click(screen.getByText('2023'));
    fireEvent.click(screen.getByText('Month'));
    fireEvent.click(screen.getByText('January'));
    fireEvent.click(screen.getByText('Day'));
    fireEvent.click(screen.getByText('1'));
    expect(onChange).toBeCalledWith(new Date(2023, 0, 1).getTime());
  });
});
