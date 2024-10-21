import { render, screen } from '@testing-library/react';
import InformationBar from './InformationBar';

describe('InformationBar', () => {
  it('should display the user name correctly', () => {
    const userName = 'John Doe';
    const difficultyLevel = 'easy';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    const userNameElement = screen.getByText(userName);
    expect(userNameElement).toBeInTheDocument();
  });

  it('should display the difficulty level correctly', () => {
    const userName = 'Jane Doe';
    const difficultyLevel = 'hard';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    const difficultyElement = screen.getByText(difficultyLevel);
    expect(difficultyElement).toBeInTheDocument();
  });

  it('should render with correct props', () => {
    const userName = 'Alice';
    const difficultyLevel = 'medium';

    render(
      <InformationBar userName={userName} difficultyLevel={difficultyLevel} />,
    );

    expect(screen.getByText(userName)).toBeInTheDocument();
    expect(screen.getByText(difficultyLevel)).toBeInTheDocument();
  });
});
