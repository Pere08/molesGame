import { Difficulty } from "../../pages/Home";
import DifficultyButton from "../DifficultyButton/DifficultyButton";

const ChooseDifficulty = ({difficultyList,  setDifficulty}: {
  setDifficulty: (value: Difficulty) => void;
  difficultyList: string[];
}) => {

    return (
      <div className="choose-difficulty-button-box">
        {
            difficultyList.map((name, index) => (
                <DifficultyButton 
                key={`${name}-${index}`} 
                name={name} 
                onClick={setDifficulty}
                />
            ))
        }
      </div>
    );
  };
  
export default ChooseDifficulty;