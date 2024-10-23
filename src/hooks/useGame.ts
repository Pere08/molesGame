import { useCallback, useEffect, useMemo, useState } from 'react';
import { difficultyParameters } from '../utils/gameParameters';
import { moleBoxes } from '../pages/Game/Game.props';
import { useNavigate } from 'react-router-dom';
import { Difficulty } from './useHome';

export const useGame = () => {
  const navigate = useNavigate();
  const currentDifficulty = localStorage.getItem('difficulty') ?? 'easy';
  const currentName = localStorage.getItem('userName') ?? '';

  useEffect(() => {
    if (!currentDifficulty || !currentName) {
      navigate('/');
    }
  }, []);

  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [showCompleteGameModal, setCompleteGameModal] = useState(false);
  const [numPoints, setNumPoints] = useState<number>(0);
  const [moleBoxes, setMoleBoxes] = useState<moleBoxes>(Array(9).fill(false));
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
    setCompleteGameModal(false);
    setStartTimer(true);
  };

  const handleCompleteTimer = () => {
    setStartTimer(false);
    handleStart();
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const handlePlayAgain = () => {
    setNumPoints(0);
    handleStartTimer();
  };

  const handleFinishCountDown = () => {
    setCompleteGameModal(true);
    stopToggling();
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
    handleCompleteTimer,
    showCompleteGameModal,
    handleReturnHome,
    handleFinishCountDown,
    handlePlayAgain,
  };
};
