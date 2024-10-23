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
    <div className="modal-background-timer">
      <div className="modal-content-timer">
        {count > 0 ? 
        (<>
          Timer <span>{count}</span>
        </>) : <span>GO!</span>}
      </div>
    </div>
  );
};

export default Timer;
