import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';
import { describe, it, expect, vi } from 'vitest';

describe('CustomButton component', () => {
  it('should render the button with the correct name', () => {
    const buttonName = 'Play';
    render(
      <CustomButton
        className="test-class"
        name={buttonName}
        onClick={() => {}}
      />,
    );

    const button = screen.getByRole('button', { name: buttonName });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonName);
  });

  it('should apply the correct className', () => {
    const className = 'test-class';
    render(
      <CustomButton className={className} name="Play" onClick={() => {}} />,
    );

    const button = screen.getByRole('button', { name: 'Play' });
    expect(button).toHaveClass(className);
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(
      <CustomButton className="test-class" name="Play" onClick={onClickMock} />,
    );

    const button = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(
      <CustomButton className="test-class" name="Play" onClick={onClickMock} />,
    );

    const button = screen.getByRole('button', { name: 'Play' });
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
