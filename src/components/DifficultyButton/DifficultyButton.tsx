import { Difficulty } from '../../pages/Home/Home';
import { IDifficultyButton } from './DifficultyButton.props';

const DifficultyButton = ({ name, onClick }: IDifficultyButton) => {
  return (
    <button
      className="difficulty-button"
      onClick={() => onClick(name as Difficulty)}
    >
      {name}
    </button>
  );
};

export default DifficultyButton;
