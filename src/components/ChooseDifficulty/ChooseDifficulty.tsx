import DifficultyButton from "../DifficultyButton/DifficultyButton";
import { IChooseDifficulty } from "./ChooseDifficulty.props";

const ChooseDifficulty = ({difficultyList,  setDifficulty}: IChooseDifficulty) => {

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