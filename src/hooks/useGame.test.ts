import { renderHook, act } from '@testing-library/react-hooks';
import { useGame } from './useGame';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(() => vi.fn()),
}));

describe('useGame', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('sets the current difficulty and name from localStorage', () => {
    localStorage.setItem('difficulty', 'easy');
    localStorage.setItem('userName', 'John Doe');

    const { result } = renderHook(() => useGame());

    expect(result.current.currentDifficulty).toBe('easy');
    expect(result.current.currentName).toBe('John Doe');
  });

  it('handles starting the timer', () => {
    const { result } = renderHook(() => useGame());

    act(() => {
      result.current.handleStartTimer();
    });

    expect(result.current.startTimer).toBe(true);
    expect(result.current.showCompleteGameModal).toBe(false);
  });

  it('handles completing the timer', () => {
    const { result } = renderHook(() => useGame());

    act(() => {
      result.current.handleCompleteTimer();
    });

    expect(result.current.startTimer).toBe(false);
    expect(result.current.isToggling).toBe(true);
  });

  it('handles playing again', () => {
    const { result } = renderHook(() => useGame());

    act(() => {
      result.current.handlePlayAgain();
    });

    expect(result.current.numPoints).toBe(0);
    expect(result.current.startTimer).toBe(true);
  });

  it('handles finishing countdown', () => {
    const { result } = renderHook(() => useGame());

    act(() => {
      result.current.handleFinishCountDown();
    });

    expect(result.current.showCompleteGameModal).toBe(true);
    expect(result.current.isToggling).toBe(false);
  });

  it('toggleMoleBoxes updates moleBoxes state', () => {
    localStorage.setItem('difficulty', 'easy');
    const { result } = renderHook(() => useGame());

    act(() => {
      result.current.toggleMoleBoxes();
    });

    expect(result.current.moleBoxes).toHaveLength(9);
  });
});
