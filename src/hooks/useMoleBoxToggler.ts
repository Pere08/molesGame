import { useEffect, useCallback } from "react";
import { Difficulty } from "../pages/Home";

type moleBoxes = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

export const useMoleBoxToggler = (
  isToggling: boolean,
  currentDifficulty: string,
  setMoleBoxes: React.Dispatch<React.SetStateAction<moleBoxes>>,
) => {
  const difficultyParameters = {
    easy: { time: 1000 },
    medium: { time: 750 },
    hard: { time: 500 },
  };

  const toggleMoleBoxes = useCallback(() => {
    setMoleBoxes((prev) => {
      const existSomeTrue = prev.some((val) => val);

      if (existSomeTrue) {
        return [false, false, false, false, false, false, false, false, false];
      } else {
        const randomIndex = Math.floor(Math.random() * 9);
        const newMoleBoxes = prev.map((val, index) => (index === randomIndex ? true : false)) as moleBoxes;
        return newMoleBoxes;
      }
    });
  }, [setMoleBoxes]);

  useEffect(() => {
    let interval: number | null = null;

    if (isToggling) {
      interval = setInterval(toggleMoleBoxes, difficultyParameters[currentDifficulty as Difficulty].time);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isToggling, toggleMoleBoxes, currentDifficulty]);
};
