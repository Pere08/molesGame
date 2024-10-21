import { IActionButton } from './ActionButton.props';

export type actionButton = 'start' | 'stop';

const ActionButton = ({ togglingState, stop, start }: IActionButton) => {
  return (
    <div className="action-button">
      {togglingState ? (
        <button onClick={stop}>STOP</button>
      ) : (
        <button onClick={start}>START</button>
      )}
    </div>
  );
};

export default ActionButton;
