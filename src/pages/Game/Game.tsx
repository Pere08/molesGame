import InformationBar from '../../components/InformationBar/InformationBar';
import ShowPoints from '../../components/ShowPoints/ShowPoints';
import MoleBox from '../../components/MoleBox/MoleBox';
import CountDown from '../../components/CountDown/CountDown';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useGame } from '../../hooks/useGame'; // Importa el nuevo hook
import { difficultyParameters } from '../../utils/gameParameters';
import { Difficulty } from '../Home/Home';
import './Game.css';
import Timer from '../../components/Timer/Timer';
import CompleteGameModal from '../../components/CompleteGameModal/CompleteGameModal';

const Game = () => {
  const {
    numPoints,
    setNumPoints,
    moleBoxes,
    currentDifficulty,
    currentName,
    togglingState,
    stopToggling,
    startTimer,
    handleStartTimer,
    handleCompleteTimer,
    showCompleteGameModal,
    handleReturnHome,
    handleFinishCountDown,
  } = useGame();

  return (
    <div>
      <Timer startCountdown={startTimer} onComplete={handleCompleteTimer} />
      <CompleteGameModal
        isVisible={showCompleteGameModal}
        points={numPoints}
        closeGameFn={handleReturnHome}
        playAgainFn={handleStartTimer}
      />
      <InformationBar
        userName={currentName}
        difficultyLevel={currentDifficulty}
      />
      <div className="points-and-countdown">
        <ShowPoints numPoints={numPoints} />
        <CountDown
          isActive={togglingState}
          onTimerEnd={handleFinishCountDown}
          initialTime={30000}
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
        {togglingState ? (
          <CustomButton
            className="stop-button"
            name="Stop"
            onClick={stopToggling}
          />
        ) : (
          <CustomButton
            className="start-button"
            name="Start"
            onClick={handleStartTimer}
          />
        )}
      </div>
    </div>
  );
};

export default Game;
