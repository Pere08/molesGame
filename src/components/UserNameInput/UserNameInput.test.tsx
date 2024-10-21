import { render, screen, fireEvent } from '@testing-library/react';
import UserNameInput from './UserNameInput';

describe('UserNameInput', () => {
  it('renders with default value', () => {
    const setUserNameMock = vi.fn();
    const defaultValue = 'John Doe';

    render(
      <UserNameInput
        defaultValue={defaultValue}
        setUserName={setUserNameMock}
      />,
    );

    const input = screen.getByDisplayValue(defaultValue);
    expect(input).toBeInTheDocument();
  });

  it('calls setUserName on input change', () => {
    const setUserNameMock = vi.fn();
    const defaultValue = 'John Doe';

    render(
      <UserNameInput
        defaultValue={defaultValue}
        setUserName={setUserNameMock}
      />,
    );

    const input = screen.getByDisplayValue(defaultValue);
    fireEvent.change(input, { target: { value: 'Jane Doe' } });

    expect(setUserNameMock).toHaveBeenCalledWith('Jane Doe');
  });
});
