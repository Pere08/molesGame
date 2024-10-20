import { useState } from "react";
import ChooseDifficulty from "../components/ChooseDifficulty/ChooseDifficulty";
import UserNameInput from "../components/UserNameInput/UserNameInput";
import { useNavigate } from "react-router-dom";

export type Difficulty = 'easy' | 'medium' | 'hard';

const Home = () => {
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  const navigate = useNavigate();

  const UserNameHandler = (userName: string | undefined): void => {
    if(userName){
      localStorage.setItem('userName', userName);
    }
  }

  const DifficultyHandler = (difficulty: string | undefined) => {
    if(difficulty){
      localStorage.setItem('difficulty', difficulty);
    }
  }

  const onSubmit = () => {
    UserNameHandler(userName);
    DifficultyHandler(difficulty);
    navigate("/game");
  }

    return (
      <div className="home">
        <div className="title">
          <h1>Moles's Game</h1>
        </div>
        <div className="input-username">
          <UserNameInput setUserName={setUserName}/>
        </div>
        <div className="choose-difficulty">
          <ChooseDifficulty difficultyList={difficultyList} setDifficulty={
            setDifficulty
          }/>
        </div>
        <div className="start-button">
          <button 
          disabled={!userName && !difficulty}
          onClick={onSubmit}>Iniciar</button>
        </div>
      </div>
    );
  };
  
  export default Home;