import { useState, useEffect } from 'react';
import ChooseDifficulty from '../../components/ChooseDifficulty/ChooseDifficulty';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import CustomButton from '../../components/CustomButton/CustomButton';

export type Difficulty = 'easy' | 'medium' | 'hard';

const Home = () => {
  const navigate = useNavigate();

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
    if (userName && difficulty) {
      navigate('/game');
    }
  };

  return (
    <div className="home">
      <h1 className="title">Mole's Game</h1>
      <div className="input-username" data-testid="username-input">
        <UserNameInput defaultValue={userName} setUserName={setUserName} />
      </div>
      <div className="choose-difficulty" data-testid="difficulty-choice">
        <ChooseDifficulty
          difficultyList={difficultyList}
          setDifficulty={setDifficulty}
        />
      </div>
      <div data-testid="start-button" className="start-button">
        <CustomButton
          data-testid="start-button"
          className="play-button"
          name="Play"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default Home;
