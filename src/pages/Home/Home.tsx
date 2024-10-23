import { useState, useEffect } from 'react';
import ChooseDifficulty from '../../components/ChooseDifficulty/ChooseDifficulty';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import './Home.css';

export type Difficulty = 'easy' | 'medium' | 'hard';

const Home = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState({
    username: false,
    difficulty: false,
  });

  const [userName, setUserName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>();

  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || '';
    setUserName(storedUserName);
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  useEffect(() => {
    if (difficulty) {
      localStorage.setItem('difficulty', difficulty);
    }
  }, [difficulty]);

  const onSubmit = () => {
    setErrorMsg({ username: false, difficulty: false });
    setTimeout(() => {
      if (userName && difficulty) {
        console.log(userName);
        console.log(difficulty);
        navigate('/game');
      } else {
        if (!userName) {
          setErrorMsg((prev) => ({ ...prev, username: true }));
        }
        if (!difficulty) {
          setErrorMsg((prev) => ({ ...prev, difficulty: true }));
        }
      }
    }, 500);
  };

  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">Mole's Game</h1>
        <h3 className="sub-title">Pokemon version</h3>
      </div>

      <div className="input-username" data-testid="username-input">
        <UserNameInput defaultValue={userName} setUserName={setUserName} />
        {errorMsg.username && (
          <span className="error-msg">Enter a user name, please</span>
        )}
      </div>

      <div className="choose-difficulty" data-testid="difficulty-choice">
        <ChooseDifficulty
          difficultyList={difficultyList}
          setDifficulty={setDifficulty}
        />
        {errorMsg.difficulty && (
          <span className="error-msg">Select some difficulty, please</span>
        )}
      </div>

      <div className="start-button-box" data-testid="start-button-box">
        <CustomButton
          test-id="start-button"
          className="play-button"
          onClick={onSubmit}
          name="PLAY"
        />
      </div>
    </div>
  );
};

export default Home;
