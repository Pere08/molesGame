import { Difficulty } from '../../hooks/useHome';
export interface IChooseDifficulty {
  setDifficulty: (value: Difficulty) => void;
  difficultyList: string[];
}
