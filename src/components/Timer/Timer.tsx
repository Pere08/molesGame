import { ITimer } from './Timer.props';
import { useCountdownTimer } from '../../hooks/useCountdownTimer';
import './Timer.scss';

const Timer = ({ startCountdown, onComplete }: ITimer) => {
  const { count, isVisible } = useCountdownTimer({
    startCountdown,
    onComplete,
  });

  if (!isVisible) return null;

  return (
    <div className="modal-background-timer">
      <div className="modal-content-timer">
        {count > 0 ? <h1>{count}</h1> : <h1>GO!</h1>}
      </div>
    </div>
  );
};

export default Timer;
