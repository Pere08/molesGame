import InformationBar from '../../components/InformationBar/InformationBar';
import ShowPoints from '../../components/ShowPoints/ShowPoints';
import MoleBox from '../../components/MoleBox/MoleBox';
import CountDown from '../../components/CountDown/CountDown';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useGame } from '../../hooks/useGame'; // Importa el nuevo hook
import { difficultyParameters } from '../../utils/gameParameters';
import Timer from '../../components/Timer/Timer';
import CompleteGameModal from '../../components/CompleteGameModal/CompleteGameModal';
import { Difficulty } from '../../hooks/useHome';
import './Game.scss';

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
    handlePlayAgain,
  } = useGame();

  return (
    <div className="game-container">
      <Timer startCountdown={startTimer} onComplete={handleCompleteTimer} />
      <CompleteGameModal
        isVisible={showCompleteGameModal}
        points={numPoints}
        closeGameFn={handleReturnHome}
        playAgainFn={handlePlayAgain}
      />

      <div className="information-bar-container">
        <InformationBar
          userName={currentName}
          difficultyLevel={currentDifficulty}
        />
      </div>

      <div className="points-and-countdown">
        <ShowPoints numPoints={numPoints} />
        <CountDown
          isActive={togglingState}
          onTimerEnd={handleFinishCountDown}
          initialTime={
            difficultyParameters[currentDifficulty as Difficulty].countdown
          }
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
      <div className="start-stop-button-container">
        {togglingState ? (
          <CustomButton
            className="action-button"
            name="Stop"
            onClick={stopToggling}
          />
        ) : (
          <CustomButton
            className="action-button"
            name="Start"
            onClick={handleStartTimer}
          />
        )}
      </div>
    </div>
  );
};

export default Game;
