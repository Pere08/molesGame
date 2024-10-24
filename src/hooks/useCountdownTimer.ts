import { useEffect, useState } from 'react';

interface UseCountdownTimerProps {
  startCountdown: boolean;
  duration?: number;
  onComplete: () => void;
}

export const useCountdownTimer = ({
  startCountdown,
  duration = 3,
  onComplete,
}: UseCountdownTimerProps) => {
  const [count, setCount] = useState<number>(duration);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (startCountdown) {
      setIsVisible(true);
      setCount(duration);
      interval = setInterval(() => {
        setCount((prevCount) => {
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
  }, [startCountdown, duration, onComplete]);

  return { count, isVisible };
};
