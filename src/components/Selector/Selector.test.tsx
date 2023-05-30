import { fireEvent, render, screen } from '@testing-library/react';

import { Selector } from '.';

describe('Selector test', () => {
  it('Should display placeholder', () => {
    const onClick = jest.fn();
    render(
      <Selector
        options={['1', '2', '3']}
        placeholder="0"
        onClick={onClick}
        width="100px"
      />
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Should display value', () => {
    const onClick = jest.fn();
    render(
      <Selector
        options={['1', '2', '3']}
        value="0"
        onClick={onClick}
        width="100px"
      />
    );
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('Should open menu', () => {
    const onClick = jest.fn();
    render(
      <Selector
        options={['1', '2', '3']}
        value="0"
        onClick={onClick}
        width="100px"
      />
    );
    const selector = screen.getByText('0');
    fireEvent.click(selector);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('Should change the option menu', () => {
    const onClick = jest.fn();
    render(
      <Selector
        options={['1', '2', '3']}
        value="0"
        onClick={onClick}
        width="100px"
      />
    );
    const selector = screen.getByText('0');
    fireEvent.click(selector);
    expect(screen.queryByText('1')).toBeInTheDocument();
    expect(screen.queryByText('2')).toBeInTheDocument();
    expect(screen.queryByText('3')).toBeInTheDocument();
    const option = screen.getByText('1');
    fireEvent.click(option);
    expect(onClick).toBeCalledWith('1');
  });

  it('Should close menu on click outside', () => {
    const onClick = jest.fn();
    render(
      <Selector
        options={['1', '2', '3']}
        value="0"
        onClick={onClick}
        width="100px"
      />
    );
    const selector = screen.getByText('0');
    fireEvent.click(selector);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
    expect(screen.queryByText('2')).not.toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();
  });
});
