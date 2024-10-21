import { render, screen, fireEvent } from '@testing-library/react';
import DifficultyButton from './DifficultyButton';

describe('DifficultyButton', () => {
  it('should render the button with the correct name', () => {
    const buttonName = 'easy';
    const mockOnClick = vi.fn();

    render(<DifficultyButton name={buttonName} onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: buttonName });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonName);
  });

  it('should call onClick function with the correct value when clicked', () => {
    const buttonName = 'medium';
    const mockOnClick = vi.fn();

    render(<DifficultyButton name={buttonName} onClick={mockOnClick} />);

    const button = screen.getByRole('button', { name: buttonName });
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledWith(buttonName);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
