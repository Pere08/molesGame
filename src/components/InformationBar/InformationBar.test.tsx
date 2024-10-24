import { render, screen } from '@testing-library/react';
import InformationBar from './InformationBar';
import { firstCapitalLetter } from '../../utils/utils';

describe('InformationBar', () => {
  it('should display the user name correctly', () => {
    const userName = 'John Doe';
    const difficultyLevel = 'easy';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    const userNameElement = screen.getByText(firstCapitalLetter(userName));
    expect(userNameElement).toBeInTheDocument();
    expect(screen.getByText('game.player')).toBeInTheDocument();
  });

  it('should display the difficulty level correctly', () => {
    const userName = 'Jane Doe';
    const difficultyLevel = 'hard';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    const difficultyElement = screen.getByText('game.difficulty.hard');
    expect(difficultyElement).toBeInTheDocument();
    expect(screen.getByText('game.level')).toBeInTheDocument();
  });

  it('should render with correct props', () => {
    const userName = 'Alice';
    const difficultyLevel = 'medium';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    expect(screen.getByText(firstCapitalLetter(userName))).toBeInTheDocument();
    expect(
      screen.getByText(`game.difficulty.${difficultyLevel}`),
    ).toBeInTheDocument();
    expect(screen.getByText('game.player')).toBeInTheDocument();
    expect(screen.getByText('game.level')).toBeInTheDocument();
  });
});
