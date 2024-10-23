import { useState, useEffect } from 'react';
import ChooseDifficulty from '../../components/ChooseDifficulty/ChooseDifficulty';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton/CustomButton';
import './Home.css';

export type Difficulty = 'easy' | 'medium' | 'hard';

const Home = () => {
  const navigate = useNavigate();

  const [showError, setShowError] = useState(false)
  const [userName, setUserName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || '';
    const storedDifficulty =
      (localStorage.getItem('difficulty') as Difficulty) || 'easy';
    setUserName(storedUserName);
    setDifficulty(storedDifficulty);
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
    setShowError(false);
    setTimeout(() => {
      if (userName && difficulty) {
        navigate('/game');
      }else {
        setShowError(true);
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
      </div>

      <div className="choose-difficulty" data-testid="difficulty-choice">
        <ChooseDifficulty
          difficultyList={difficultyList}
          setDifficulty={setDifficulty}
        />
      </div>

      <div className='error-msg-container'>
        {
          showError && (
            <span className='error-msg'>INSERT A NAME AND CHOOSE A DIFFICULTY</span>
          )
        }
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
