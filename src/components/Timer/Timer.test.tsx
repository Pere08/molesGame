import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Timer from './Timer';
import { useCountdownTimer } from '../../hooks/useCountdownTimer';

vi.mock('../../hooks/useCountdownTimer');

describe('Timer component', () => {
  const mockUseCountdownTimer = {
    count: 5,
    isVisible: true,
  };

  beforeEach(() => {
    // @ts-expect-error: Mocking hook
    useCountdownTimer.mockReturnValue(mockUseCountdownTimer);
  });

  it('should not render when isVisible is false', () => {
    // @ts-expect-error: Mocking hook
    useCountdownTimer.mockReturnValue({
      ...mockUseCountdownTimer,
      isVisible: false,
    });

    render(<Timer startCountdown={true} onComplete={vi.fn()} />);

    expect(screen.queryByText('5')).toBeNull();
  });

  it('should render the countdown number when isVisible is true', () => {
    render(<Timer startCountdown={true} onComplete={vi.fn()} />);

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should display "GO!" when count is 0', () => {
    // @ts-expect-error: Mocking hook
    useCountdownTimer.mockReturnValue({ ...mockUseCountdownTimer, count: 0 });

    render(<Timer startCountdown={true} onComplete={vi.fn()} />);

    expect(screen.getByText('GO!')).toBeInTheDocument();
  });
});
