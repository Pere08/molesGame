import { Difficulty } from "../../pages/Home/Home";

export interface IDifficultyButton  {
  name: string, 
  onClick: (value: Difficulty) => void;
}