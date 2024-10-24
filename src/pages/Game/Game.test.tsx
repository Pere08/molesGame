import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Game from './Game';
import { useGame } from '../../hooks/useGame';

vi.mock('../../hooks/useGame');

describe('Game component', () => {
  const mockUseGame = {
    numPoints: 0,
    setNumPoints: vi.fn(),
    moleBoxes: [true, false, false, false, false],
    currentDifficulty: 'easy',
    currentName: 'Jugador',
    togglingState: false,
    stopToggling: vi.fn(),
    handleStartTimer: vi.fn(),
  };

  beforeEach(() => {
    // @ts-expect-error: The 'vi' namespace is not recognized by TypeScript
    (useGame as vi.Mock).mockReturnValue(mockUseGame);
  });

  it('should render the user name and difficulty level', () => {
    render(<Game />);
    const playerName = 'Jugador';
    const level = 'game.difficulty.easy';

    expect(screen.getByText(playerName)).toBeInTheDocument();
    expect(screen.getByText(level)).toBeInTheDocument();
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

    const startButton = screen.getByText('game.buttons.start');
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

    const stopButton = screen.getByText('game.buttons.stop');
    expect(stopButton).toBeInTheDocument();
    fireEvent.click(stopButton);
    expect(mockUseGame.stopToggling).toHaveBeenCalledTimes(1);
  });
});
