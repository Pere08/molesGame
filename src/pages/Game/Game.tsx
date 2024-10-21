import { useCallback, useMemo, useState } from "react";
import InformationBar from "../../components/InformationBar/InformationBar";
import ShowPoints from "../../components/ShowPoints/ShowPoints";
import MoleBox from "../../components/MoleBox/MoleBox";
import { useMoleBoxToggler } from "../../hooks/useMoleBoxToggler";
import { Difficulty } from "../Home/Home";
import { difficultyParameters } from "../../utils/gameParameters";
import ActionButton from "../../components/ActionButton/ActionButton";
import CountDown from "../../components/Timer/CountDown";

type moleBosxes = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean];

const Game = () => {
  const [numPoints, setNumPoints] = useState<number>(0);
  const [moleBoxes, setMoleBoxes] = useState<moleBosxes>([false, false, false, false, false, false, false, false, false]);
  const currentDifficulty = localStorage.getItem("difficulty") ?? "easy";
  const currentName = localStorage.getItem("userName") ?? "";
  const [isToggling, setIsToggling] = useState(false);

  const togglingState = useMemo(() => isToggling, [isToggling]);

  useMoleBoxToggler(togglingState, currentDifficulty, setMoleBoxes);

  const stopToggling = useCallback(() => {
    setIsToggling(false);
    setMoleBoxes([false, false, false, false, false, false, false, false, false]);
  }, []);

  const handleStart = () => {
    setIsToggling(true);
  };


  return (
    <div>
      <InformationBar userName={currentName} difficultyLevel={currentDifficulty} />
      <div>
        <ShowPoints numPoints={numPoints} />
        <CountDown isActive={togglingState} onTimerEnd={stopToggling} initialTime={5000}/>
      </div>
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
      <ActionButton togglingState={togglingState} stop={stopToggling} start={handleStart}/>
    </div>
  );
};

export default Game;
