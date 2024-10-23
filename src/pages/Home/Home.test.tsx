import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
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
    expect(screen.getByTestId('start-button')).toBeInTheDocument();
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

  it('updates the difficulty and stores it in localStorage after submitting', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const usernameInput = screen
      .getByTestId('username-input')
      .querySelector('input');
    fireEvent.change(usernameInput!, { target: { value: 'Alice' } });

    const hardButton = screen.getByText('Hard');
    fireEvent.click(hardButton);

    const startButton = screen.getByTestId('start-button');
    fireEvent.click(startButton);

    expect(localStorage.getItem('difficulty')).toBe('hard');
    expect(localStorage.getItem('userName')).toBe('Alice');
  });

  it('shows error messages if username or difficulty is not selected', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const startButton = screen.getByTestId('start-button');
    fireEvent.click(startButton);

    expect(screen.getByTestId('error-msg-username')).toBeInTheDocument();
    expect(screen.getByTestId('error-msg-difficulty')).toBeInTheDocument();
  });

  it('navigates to the game page when both username and difficulty are provided', () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const usernameInput = screen
      .getByTestId('username-input')
      .querySelector('input');
    fireEvent.change(usernameInput!, { target: { value: 'Alice' } });

    const hardButton = screen.getByText('Hard');
    fireEvent.click(hardButton);

    const startButton = screen.getByTestId('start-button');
    fireEvent.click(startButton);

    expect(mockNavigate).toHaveBeenCalledWith('/game');
  });
});
