import { render, screen, fireEvent } from '@testing-library/react';
import Game from './Game';
import { IInformationBar } from '../../components/InformationBar/InformationBar.props';
import { IShowPoints } from '../../components/ShowPoints/ShowPoints.props';
import { IMoleBox } from '../../components/MoleBox/MoleBox.props';
import { IActionButton } from '../../components/ActionButton/ActionButton.props';
import { vi } from 'vitest';

vi.mock('../../components/InformationBar/InformationBar', () => ({
  default: ({ userName, difficultyLevel }: IInformationBar) => (
    <div>
      <div>{userName}</div>
      <div>{difficultyLevel}</div>
    </div>
  ),
}));

vi.mock('../../components/ShowPoints/ShowPoints', () => ({
  default: ({ numPoints }: IShowPoints) => <div>{numPoints}</div>,
}));

vi.mock('../../components/MoleBox/MoleBox', () => ({
  default: ({ show, setNumPoints, pointsByDifficulty }: IMoleBox) => (
    <button
      onClick={() => setNumPoints((prev) => prev + pointsByDifficulty)}
      style={{ display: show ? 'block' : 'none' }}
    >
      Mole
    </button>
  ),
}));

vi.mock('../../components/ActionButton/ActionButton', () => ({
  default: ({ stop, start }: IActionButton) => (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  ),
}));

describe('Game', () => {
  beforeEach(() => {
    localStorage.setItem('difficulty', 'easy');
    localStorage.setItem('userName', 'John Doe');
  });

  it('renders InformationBar with username and difficulty level', () => {
    render(<Game />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('easy')).toBeInTheDocument();
  });

  it('renders ShowPoints with initial points', () => {
    render(<Game />);

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('starts toggling and shows mole boxes', () => {
    render(<Game />);

    const startButton = screen.getByText('Start');
    fireEvent.click(startButton);

    const moleBoxes = screen.getAllByText('Mole');
    expect(moleBoxes.length).toBe(9);
  });

  // it('stops toggling and hides mole boxes', () => {
  //   render(<Game />);

  //   const startButton = screen.getByText('Start');
  //   fireEvent.click(startButton);

  //   const stopButton = screen.getByText('Stop');
  //   fireEvent.click(stopButton);

  //   const moleBoxes = screen.queryAllByText('Mole');
  //   expect(moleBoxes.length).toBe(0);
  // });

  // it('increments numPoints when mole is clicked', async () => {
  //   render(<Game />);

  //   const startButton = screen.getByText('Start');
  //   fireEvent.click(startButton);

  //   const moleBox = screen.getAllByText('Mole')[0];
  //   fireEvent.click(moleBox);

  //   await waitFor(() => {
  //     expect(screen.getByText('1')).toBeInTheDocument();
  //   });
  // });
});
