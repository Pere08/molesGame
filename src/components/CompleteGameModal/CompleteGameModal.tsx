import './CompleteGameModal.css';

const ICompleteGameModal = ({
  points,
  playAgainFn,
  closeGameFn,
  isVisible,
}: {
  isVisible: boolean;
  points: number;
  playAgainFn: () => void;
  closeGameFn: () => void;
}) => {
  if (!isVisible) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Thanks for play!</h2>
        <h2>Points: {points}</h2>
        <div>
          <button type="button" onClick={playAgainFn}>
            Play again
          </button>
          <button type="button" onClick={closeGameFn}>
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ICompleteGameModal;