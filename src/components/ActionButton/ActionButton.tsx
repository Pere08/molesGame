export type actionButton = 'start' | 'stop';

const ActionButton = ({togglingState, stop, start}: 
  {
    togglingState: boolean
    start: () => void
    stop: () => void
  }) => {
    return (
      <div className="action-button">
        {
          togglingState ? 
            (<button onClick={stop}>STOP</button>) : 
            ( <button onClick={start}>START</button>)
        }
      </div>
    );
  };
  
export default ActionButton;