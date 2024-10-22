import { Difficulty } from '../../pages/Home/Home';
import CustomButton from '../CustomButton/CustomButton';
import { IChooseDifficulty } from './ChooseDifficulty.props';

const ChooseDifficulty = ({
  difficultyList,
  setDifficulty,
}: IChooseDifficulty) => {

  const difficultyHandler = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  return (
    <div className="choose-difficulty-button-box">
      {difficultyList.map((name, index) => (
        <CustomButton data-testid="difficulty-button" className="difficulty-button" key={`${name}-${index}`}
        name={name} onClick={() => difficultyHandler(name as Difficulty)}/>
      ))}
    </div>
  );
};

export default ChooseDifficulty;
