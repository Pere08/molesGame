import { Difficulty } from '../../pages/Home/Home';

export interface IChooseDifficulty {
  setDifficulty: (value: Difficulty) => void;
  difficultyList: string[];
}
