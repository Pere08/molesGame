// CountDown.test.tsx
import { render, screen, act } from '@testing-library/react';
import CountDown from './CountDown';
import useCountDown from '../../hooks/useCountDown';

vi.mock('../../hooks/useCountDown');

describe('CountDown Component', () => {
  const mockOnTimerEnd = vi.fn();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders correctly with initial time', () => {
    (useCountDown as jest.Mock).mockReturnValue(60000);
    render(<CountDown initialTime={60000} isActive={true} onTimerEnd={mockOnTimerEnd} />);

    expect(screen.getByText('01:00:000')).toBeInTheDocument();
  });

  it('displays the countdown time correctly', () => {
    (useCountDown as jest.Mock).mockReturnValue(50000); 
    render(<CountDown initialTime={60000} isActive={true} onTimerEnd={mockOnTimerEnd} />);

    // Ajustar el texto esperado
    expect(screen.getByText('00:50:000')).toBeInTheDocument();
  });

  it('displays the correct time format', () => {
    (useCountDown as jest.Mock).mockReturnValue(123456);
    render(<CountDown initialTime={60000} isActive={true} onTimerEnd={mockOnTimerEnd} />);

    expect(screen.getByText('02:03:456')).toBeInTheDocument();
  });

  it('displays the initial time when isActive is false', () => {
    (useCountDown as jest.Mock).mockReturnValue(60000);
    render(<CountDown initialTime={60000} isActive={false} onTimerEnd={mockOnTimerEnd} />);

    expect(screen.getByText('01:00:000')).toBeInTheDocument();
  });

  it('counts down correctly', () => {
    (useCountDown as jest.Mock).mockReturnValue(1000);
    render(<CountDown initialTime={60000} isActive={true} onTimerEnd={mockOnTimerEnd} />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    (useCountDown as jest.Mock).mockReturnValue(900);

    render(<CountDown initialTime={60000} isActive={true} onTimerEnd={mockOnTimerEnd} />);

    expect(screen.getByText('00:00:900')).toBeInTheDocument();
  });
});
