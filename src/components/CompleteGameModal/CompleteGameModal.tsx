import './CompleteGameModal.scss';

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
        <h4>Thanks for play!</h4>
        <h4>Points: {points}</h4>
        <div className="buttons-container">
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
