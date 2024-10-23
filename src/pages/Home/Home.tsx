import ChooseDifficulty from '../../components/ChooseDifficulty/ChooseDifficulty';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import useHome, { Difficulty } from '../../hooks/useHome';
import './Home.css';

const Home = () => {
  const { errorMsg, userName, setUserName, setDifficulty, onSubmit } =
    useHome();

  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">Mole's Game</h1>
        <h3 className="sub-title">Pokemon version</h3>
      </div>

      <div className="input-username" data-testid="username-input">
        <UserNameInput defaultValue={userName} setUserName={setUserName} />
        {errorMsg.username && (
          <span className="error-msg" data-testid="error-msg-username">
            Enter a name, please
          </span>
        )}
      </div>

      <div className="choose-difficulty" data-testid="difficulty-choice">
        <ChooseDifficulty
          difficultyList={difficultyList}
          setDifficulty={setDifficulty}
        />
        {errorMsg.difficulty && (
          <span className="error-msg" data-testid="error-msg-difficulty">
            Select some difficulty, please
          </span>
        )}
      </div>

      <div className="button-container">
        <CustomButton
          testId="start-button"
          className="play-button"
          onClick={onSubmit}
          name="PLAY"
        />
      </div>
    </div>
  );
};

export default Home;
