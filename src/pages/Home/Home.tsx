import { useState, useEffect } from "react";
import ChooseDifficulty from "../../components/ChooseDifficulty/ChooseDifficulty";
import UserNameInput from "../../components/UserNameInput/UserNameInput";
import { useNavigate } from "react-router-dom";
import "./Home.scss"

export type Difficulty = 'easy' | 'medium' | 'hard';

const Home = () => {
  const navigate = useNavigate();
  
  const [userName, setUserName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  
  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName") || "";
    const storedDifficulty = (localStorage.getItem("difficulty") as Difficulty) || 'easy';
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
    navigate("/game");
  };

  return (
    <div className="home">
      <h1 className="title">Mole's Game</h1>
      <div className="input-username">
        <UserNameInput defaultValue={userName} setUserName={setUserName} />
      </div>
      <div className="choose-difficulty">
        <ChooseDifficulty difficultyList={difficultyList} setDifficulty={setDifficulty} />
      </div>
      <div className="start-button">
        <button 
          disabled={!userName || !difficulty}
          onClick={onSubmit}
        >
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Home;
