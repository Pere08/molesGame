import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Game from './Game';
import { useGame } from '../../hooks/useGame';
import { firstCapitalLetter } from '../../utils/utils';

vi.mock('../../hooks/useGame');

describe('Game component', () => {
  const mockUseGame = {
    numPoints: 0,
    setNumPoints: vi.fn(),
    moleBoxes: [true, false, false, false, false],
    currentDifficulty: 'easy',
    currentName: 'Player',
    togglingState: false,
    stopToggling: vi.fn(),
    handleStartTimer: vi.fn(),
  };

  beforeEach(() => {
    (useGame as vi.Mock).mockReturnValue(mockUseGame);
  });

  it('should render the user name and difficulty level', () => {
    render(<Game />);
    const playerName = 'Player';
    const level = firstCapitalLetter('easy');

    expect(screen.getByText(`Player ${playerName}`)).toBeInTheDocument();
    expect(screen.getByText(`Level ${level}`)).toBeInTheDocument();
  });

  it('should render the correct number of MoleBox components', () => {
    render(<Game />);

    const moleBoxes = screen.getAllByRole('button');
    expect(moleBoxes).toHaveLength(mockUseGame.moleBoxes.length);
  });

  it('should call setNumPoints when MoleBox is clicked', () => {
    // @ts-expect-error: The 'vi' namespace is not recognized by TypeScript
    (useGame as vi.Mock).mockReturnValue({
      ...mockUseGame,
      moleBoxes: [true, false, false, false, false],
    });

    render(<Game />);

    const moleBoxes = screen.getAllByRole('img');
    fireEvent.click(moleBoxes[0]);

    expect(mockUseGame.setNumPoints).toHaveBeenCalled();
  });

  it('should display "Start" button when game is not active', () => {
    render(<Game />);

    const startButton = screen.getByText('Start');
    expect(startButton).toBeInTheDocument();
    fireEvent.click(startButton);
    expect(mockUseGame.handleStartTimer).toHaveBeenCalledTimes(1);
  });

  it('should display "Stop" button when game is active', () => {
    // @ts-expect-error: The 'vi' namespace is not recognized by TypeScript
    (useGame as vi.Mock).mockReturnValue({
      ...mockUseGame,
      togglingState: true,
    });

    render(<Game />);

    const stopButton = screen.getByText('Stop');
    expect(stopButton).toBeInTheDocument();
    fireEvent.click(stopButton);
    expect(mockUseGame.stopToggling).toHaveBeenCalledTimes(1);
  });
});
