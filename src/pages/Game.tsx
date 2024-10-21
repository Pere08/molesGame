import { useState } from "react";
import InformationBar from "../components/InformationBar/InformationBar";
import ShowPoints from "../components/ShowPoints/ShowPoints";
import MoleBox from "../components/MoleBox/MoleBox";
import { useMoleBoxToggler } from "../../src/hooks/useMoleBoxToggler"; // Importa el nuevo hook
import { Difficulty } from "./Home";

type moleBosxes = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

const Game = () => {
  const [numPoints, setNumPoints] = useState<number>(0);
  const [moleBoxes, setMoleBoxes] = useState<moleBosxes>([false, false, false, false, false, false, false, false, false]);
  const currentDifficulty = localStorage.getItem("difficulty") ?? "easy";
  const currentName = localStorage.getItem("userName") ?? "";
  const [isToggling, setIsToggling] = useState(false);

  const difficultyParameters = {
    easy: {
      time: 1000,
      points: 10,
    },
    medium: {
      time: 750,
      points: 20,
    },
    hard: {
      time: 500,
      points: 30,
    },
  };

  useMoleBoxToggler(isToggling, currentDifficulty, setMoleBoxes);

  const stopToggling = () => {
    setIsToggling(false);
    setMoleBoxes([false, false, false, false, false, false, false, false, false]);
  };

  const handleStart = () => {
    setIsToggling(true);
  };

  return (
    <div>
      <InformationBar userName={currentName} difficultyLevel={currentDifficulty} />
      <ShowPoints numPoints={numPoints} />
      <div className="game-box">
        {moleBoxes.map((box, index) => (
          <MoleBox
            key={index}
            show={box}
            setNumPoints={setNumPoints}
            pointsByDifficulty={difficultyParameters[currentDifficulty as Difficulty].points}
          />
        ))}
      </div>
      <button onClick={handleStart}>Comenzar Alternancia</button>
      <button onClick={stopToggling}>Detener Alternancia</button>
    </div>
  );
};

export default Game;
