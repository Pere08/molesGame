import { useEffect, useCallback } from 'react';
import { Difficulty } from '../pages/Home/Home';
import { difficultyParameters } from '../utils/gameParameters';

type moleBoxes = [
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
];

export const useMoleBoxToggler = (
  isToggling: boolean,
  currentDifficulty: string,
  setMoleBoxes: React.Dispatch<React.SetStateAction<moleBoxes>>,
) => {
  const toggleMoleBoxes = useCallback(() => {
    setMoleBoxes((prev) => {
      const existSomeTrue = prev.some((val) => val);

      if (existSomeTrue) {
        return [false, false, false, false, false, false, false, false, false];
      } else {
        const randomIndex = Math.floor(Math.random() * 9);
        const newMoleBoxes = prev.map((_, index) =>
          index === randomIndex ? true : false,
        ) as moleBoxes;
        return newMoleBoxes;
      }
    });
  }, [setMoleBoxes]);

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
};
