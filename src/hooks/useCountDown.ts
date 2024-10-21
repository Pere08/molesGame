import { useEffect, useState, useRef } from 'react';

const useCountDown = (
  initialTime: number,
  isActive: boolean,
  onTimerEnd: () => void,
) => {
  const [milliseconds, setMilliseconds] = useState(initialTime);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const hasEnded = useRef(false);

  useEffect(() => {
    if (isActive) {
      if (milliseconds <= 0 && !hasEnded.current) {
        hasEnded.current = true;
        onTimerEnd();
        setMilliseconds(initialTime);
        return;
      }
      if (timerId) return;

      const id = setInterval(() => {
        setMilliseconds((prev) => {
          if (prev <= 10) {
            clearInterval(id);
            hasEnded.current = true;
            onTimerEnd();
            return 0;
          }
          return prev - 10;
        });
      }, 10);
      setTimerId(id);
    } else if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      hasEnded.current = false;
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isActive, milliseconds, onTimerEnd, timerId, initialTime]);

  return milliseconds;
};

export default useCountDown;
