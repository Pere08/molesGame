import { Difficulty } from '../../pages/Home/Home';
import CustomButton from '../CustomButton/CustomButton';
import { IChooseDifficulty } from './ChooseDifficulty.props';
import './ChooseDifficulty.css';

const ChooseDifficulty = ({
  difficultyList,
  setDifficulty,
}: IChooseDifficulty) => {
  const difficultyHandler = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  // const charmander = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png";
  // const charmeleon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png";
  const charizard =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png';

  return (
    <div className="choose-difficulty-button-box">
      {difficultyList.map((name, index) => (
        <CustomButton
          data-testid="difficulty-button"
          className="difficulty-button"
          key={`${name}-${index}`}
          name={name}
          onClick={() => difficultyHandler(name as Difficulty)}
          img={charizard}
        />
      ))}
    </div>
  );
};

export default ChooseDifficulty;
