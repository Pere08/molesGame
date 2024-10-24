import { render, screen, fireEvent } from '@testing-library/react';
import ChooseDifficulty from './ChooseDifficulty';

describe('ChooseDifficulty', () => {
  const difficultyList = ['easy', 'medium', 'hard'];

  it('should render the correct number of difficulty buttons', () => {
    const setDifficulty = vi.fn();
    render(
      <ChooseDifficulty
        difficultyList={difficultyList}
        setDifficulty={setDifficulty}
      />,
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(difficultyList.length);
  });

  it('should call setDifficulty with the correct value when a button is clicked', () => {
    const setDifficulty = vi.fn();
    render(
      <ChooseDifficulty
        difficultyList={difficultyList}
        setDifficulty={setDifficulty}
      />,
    );

    const easyButton = screen.getByRole('button', {
      name: 'game.difficulty.easy',
    });
    const mediumButton = screen.getByRole('button', {
      name: 'game.difficulty.medium',
    });
    const hardButton = screen.getByRole('button', {
      name: 'game.difficulty.hard',
    });

    fireEvent.click(easyButton);
    expect(setDifficulty).toHaveBeenCalledWith('easy');

    fireEvent.click(mediumButton);
    expect(setDifficulty).toHaveBeenCalledWith('medium');

    fireEvent.click(hardButton);
    expect(setDifficulty).toHaveBeenCalledWith('hard');
  });
});
