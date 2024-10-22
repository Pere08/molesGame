import { useCallback, useEffect, useMemo, useState } from 'react';
import { Difficulty } from '../pages/Home/Home';
import { difficultyParameters } from '../utils/gameParameters';
import { moleBoxes } from '../pages/Game/Game.props';

export const useGame = () => {
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [numPoints, setNumPoints] = useState<number>(0);
  const [moleBoxes, setMoleBoxes] = useState<moleBoxes>(Array(9).fill(false));
  const currentDifficulty = localStorage.getItem('difficulty') ?? 'easy';
  const currentName = localStorage.getItem('userName') ?? '';
  const [isToggling, setIsToggling] = useState(false);

  const togglingState = useMemo(() => isToggling, [isToggling]);

  const stopToggling = useCallback(() => {
    setIsToggling(false);
    setMoleBoxes(Array(9).fill(false));
  }, []);

  const handleStart = () => {
    setIsToggling(true);
  };

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  const handleCompleteTimer = () => {
    setStartTimer(false);
    handleStart();
  };

  const toggleMoleBoxes = useCallback(() => {
    setMoleBoxes((prev) => {
      const existSomeTrue = prev.some((val) => val);

      if (existSomeTrue) {
        return Array(9).fill(false);
      } else {
        const randomIndex = Math.floor(Math.random() * 9);
        const newMoleBoxes = prev.map((_, index) =>
          index === randomIndex ? true : false,
        ) as moleBoxes;
        return newMoleBoxes;
      }
    });
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isToggling) {
      interval = setInterval(
        toggleMoleBoxes,
        difficultyParameters[currentDifficulty as Difficulty].time,
      );
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isToggling, toggleMoleBoxes, currentDifficulty]);

  return {
    numPoints,
    setNumPoints,
    moleBoxes,
    setMoleBoxes,
    currentDifficulty,
    currentName,
    isToggling,
    togglingState,
    stopToggling,
    startTimer,
    handleStartTimer,
    handleCompleteTimer
  };
};
