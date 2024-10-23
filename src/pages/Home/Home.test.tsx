import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('Home', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the Home component with all elements', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByText("Mole's Game")).toBeInTheDocument();
    expect(screen.getByTestId('username-input')).toBeInTheDocument();
    expect(screen.getByTestId('difficulty-choice')).toBeInTheDocument();
    expect(screen.getByTestId('start-button-box')).toBeInTheDocument();
  });

  it('loads the username and difficulty from localStorage', () => {
    localStorage.setItem('userName', 'John Doe');
    localStorage.setItem('difficulty', 'hard');

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const usernameInput = screen
      .getByTestId('username-input')
      .querySelector('input');
    expect(usernameInput).toHaveValue('John Doe');

    const selectedDifficulty = screen.getByText('Hard');
    expect(selectedDifficulty).toBeInTheDocument();
  });

  it('updates the username and stores it in localStorage', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const usernameInput = screen
      .getByTestId('username-input')
      .querySelector('input');
    fireEvent.change(usernameInput!, { target: { value: 'Alice' } });

    expect(localStorage.getItem('userName')).toBe('Alice');
  });

  it('updates the difficulty and stores it in localStorage', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const hardButton = screen.getByText('Hard');
    fireEvent.click(hardButton);

    expect(localStorage.getItem('difficulty')).toBe('hard');
  });
});
