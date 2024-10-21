// ChooseDifficulty.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ChooseDifficulty from './ChooseDifficulty';

describe('ChooseDifficulty', () => {
  const difficultyList = ['easy', 'medium', 'hard'];

  it('should render the correct number of difficulty buttons', () => {
    const setDifficulty = vi.fn(); // Crea un mock de la función setDifficulty
    render(<ChooseDifficulty difficultyList={difficultyList} setDifficulty={setDifficulty} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(difficultyList.length);
  });

  it('should call setDifficulty with the correct value when a button is clicked', () => {
    const setDifficulty = vi.fn(); // Crea un mock de la función setDifficulty
    render(<ChooseDifficulty difficultyList={difficultyList} setDifficulty={setDifficulty} />);

    const easyButton = screen.getByRole('button', { name: 'easy' });
    const mediumButton = screen.getByRole('button', { name: 'medium' });
    const hardButton = screen.getByRole('button', { name: 'hard' });

    fireEvent.click(easyButton);
    expect(setDifficulty).toHaveBeenCalledWith('easy');

    fireEvent.click(mediumButton);
    expect(setDifficulty).toHaveBeenCalledWith('medium');

    fireEvent.click(hardButton);
    expect(setDifficulty).toHaveBeenCalledWith('hard');
  });
});
