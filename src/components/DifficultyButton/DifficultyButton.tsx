import { Difficulty } from "../../pages/Home";

const DifficultyButton = ({name, onClick}: {
    name: string, 
    onClick: (value: Difficulty) => void;
}) => {
    return (
      <button className="difficulty-button" onClick={() => onClick(name as Difficulty)}>{name}</button>
    );
  };
  
export default DifficultyButton;