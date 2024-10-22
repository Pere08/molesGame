import { useEffect, useState } from 'react';
import { ITimer } from './Timer.props';
import './Timer.scss';


const Timer = ({ startCountdown, onComplete }: ITimer) => {
  const [count, setCount] = useState<number>(3);
  const [isVisible, setIsVisible] = useState<boolean>(false); 

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startCountdown) {
      setIsVisible(true);
      setCount(3);
      interval = setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 1) {
            clearInterval(interval!);
            setIsVisible(false);
            onComplete();
          }
          return prevCount - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startCountdown, onComplete]);

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
