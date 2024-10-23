import { renderHook, act } from '@testing-library/react-hooks';
import { vi } from 'vitest';
import useHome, { Difficulty } from './useHome';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('useHome', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() => useHome());

    expect(result.current.userName).toBe('');
    expect(result.current.difficulty).toBeUndefined();
    expect(result.current.errorMsg).toEqual({
      username: false,
      difficulty: false,
    });
  });

  it('loads username from localStorage', () => {
    localStorage.setItem('userName', 'John Doe');

    const { result } = renderHook(() => useHome());

    expect(result.current.userName).toBe('John Doe');
  });

  it('updates username', () => {
    const { result } = renderHook(() => useHome());

    act(() => {
      result.current.setUserName('Alice');
      result.current.setDifficulty('hard' as Difficulty);
      result.current.onSubmit();
    });

    expect(result.current.userName).toBe('Alice');
  });

  it('updates difficulty', () => {
    const { result } = renderHook(() => useHome());

    act(() => {
      result.current.setDifficulty('hard' as Difficulty);
      result.current.setUserName('Alice');
      result.current.onSubmit();
    });

    expect(result.current.difficulty).toBe('hard');
  });

  it('sets error messages when fields are empty on submit', () => {
    const { result } = renderHook(() => useHome());

    act(() => {
      result.current.onSubmit();
    });

    expect(result.current.errorMsg).toEqual({
      username: true,
      difficulty: true,
    });
  });

  it('navigates to /game when both username and difficulty are provided', () => {
    const { result } = renderHook(() => useHome());

    act(() => {
      result.current.setUserName('Alice');
      result.current.setDifficulty('hard' as Difficulty);
    });

    act(() => {
      result.current.onSubmit();
    });

    expect(mockNavigate).toHaveBeenCalledWith('/game');
    expect(localStorage.getItem('userName')).toBe('Alice');
    expect(localStorage.getItem('difficulty')).toBe('hard');
  });
});
