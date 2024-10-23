import { renderHook } from '@testing-library/react-hooks';
import { useCountdownTimer } from './useCountdownTimer';
import { Mock } from 'vitest';

describe('useCountdownTimer', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let onComplete: Mock<(...args: any[]) => any>;

  beforeEach(() => {
    onComplete = vi.fn();
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() =>
      useCountdownTimer({ startCountdown: false, onComplete }),
    );
    expect(result.current.count).toBe(3);
    expect(result.current.isVisible).toBe(false);
  });

  it('starts countdown and becomes visible', () => {
    const { result } = renderHook(() =>
      useCountdownTimer({ startCountdown: true, onComplete }),
    );
    expect(result.current.count).toBe(3);
    expect(result.current.isVisible).toBe(true);
  });

  it('resets count when startCountdown changes', () => {
    const { result, rerender } = renderHook(
      ({ startCountdown }) => useCountdownTimer({ startCountdown, onComplete }),
      {
        initialProps: { startCountdown: false },
      },
    );
    rerender({ startCountdown: true });
    expect(result.current.count).toBe(3);
    expect(result.current.isVisible).toBe(true);
  });
});
