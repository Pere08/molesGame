import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ICompleteGameModal from './CompleteGameModal';

describe('CompleteGameModal', () => {
  const mockPlayAgainFn = vi.fn();
  const mockCloseGameFn = vi.fn();

  it('should not render the modal when isVisible is false', () => {
    render(
      <ICompleteGameModal
        isVisible={false}
        points={100}
        playAgainFn={mockPlayAgainFn}
        closeGameFn={mockCloseGameFn}
      />
    );

    const modalContent = screen.queryByText('Thanks for play!');
    expect(modalContent).toBeNull();
  });

  it('should render the modal with points when isVisible is true', () => {
    render(
      <ICompleteGameModal
        isVisible={true}
        points={150}
        playAgainFn={mockPlayAgainFn}
        closeGameFn={mockCloseGameFn}
      />
    );

    expect(screen.getByText('Thanks for play!')).toBeInTheDocument();
    expect(screen.getByText('Points: 150')).toBeInTheDocument();
  });

  it('should call playAgainFn when "Play again" button is clicked', () => {
    render(
      <ICompleteGameModal
        isVisible={true}
        points={150}
        playAgainFn={mockPlayAgainFn}
        closeGameFn={mockCloseGameFn}
      />
    );

    const playAgainButton = screen.getByText('Play again');
    fireEvent.click(playAgainButton);

    expect(mockPlayAgainFn).toHaveBeenCalledTimes(1);
  });

  it('should call closeGameFn when "No thanks" button is clicked', () => {
    render(
      <ICompleteGameModal
        isVisible={true}
        points={150}
        playAgainFn={mockPlayAgainFn}
        closeGameFn={mockCloseGameFn}
      />
    );

    const closeGameButton = screen.getByText('No thanks');
    fireEvent.click(closeGameButton);

    expect(mockCloseGameFn).toHaveBeenCalledTimes(1);
  });
});
