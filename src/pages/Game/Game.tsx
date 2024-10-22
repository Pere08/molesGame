import InformationBar from '../../components/InformationBar/InformationBar';
import ShowPoints from '../../components/ShowPoints/ShowPoints';
import MoleBox from '../../components/MoleBox/MoleBox';
import CountDown from '../../components/CountDown/CountDown';
import CustomButton from '../../components/CustomButton/CustomButton';
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
      <div>
        {
          togglingState ? (
            <CustomButton className='stop-button' name='Stop' onClick={stopToggling}/>
          ): (
            <CustomButton className='start-button' name='Start' onClick={handleStart}/>
          )
        }
      </div>
    </div>
  );
};

export default Game;
