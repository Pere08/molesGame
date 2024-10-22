import { ITimer } from './Timer.props';
import './Timer.css';
import { useCountdownTimer } from '../../hooks/useCountdownTimer';

const Timer = ({ startCountdown, onComplete }: ITimer) => {
  const { count, isVisible } = useCountdownTimer({
    startCountdown,
    onComplete,
  });

  if (!isVisible) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        {count > 0 ? <h1>{count}</h1> : <h1>GO!</h1>}
      </div>
    </div>
  );
};

export default Timer;
