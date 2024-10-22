import InformationBar from '../../components/InformationBar/InformationBar';
import ShowPoints from '../../components/ShowPoints/ShowPoints';
import MoleBox from '../../components/MoleBox/MoleBox';
import ActionButton from '../../components/ActionButton/ActionButton';
import CountDown from '../../components/CountDown/CountDown';
import { useGame } from '../../hooks/useGame'; // Importa el nuevo hook
import { difficultyParameters } from '../../utils/gameParameters';
import { Difficulty } from '../Home/Home';

const Game = () => {
  const {
    numPoints,
    setNumPoints,
    moleBoxes,
    currentDifficulty,
    currentName,
    togglingState,
    stopToggling,
    handleStart,
  } = useGame();

  return (
    <div>
      <InformationBar
        userName={currentName}
        difficultyLevel={currentDifficulty}
      />
      <div>
        <ShowPoints numPoints={numPoints} />
        <CountDown
          isActive={togglingState}
          onTimerEnd={stopToggling}
          initialTime={5000}
        />
      </div>
      <div className="game-box">
        {moleBoxes.map((box, index) => (
          <MoleBox
            key={index}
            show={box}
            setNumPoints={setNumPoints}
            pointsByDifficulty={
              difficultyParameters[currentDifficulty as Difficulty].points
            }
          />
        ))}
      </div>
      <ActionButton
        togglingState={togglingState}
        stop={stopToggling}
        start={handleStart}
      />
    </div>
  );
};

export default Game;
