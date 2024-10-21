const MoleBox = ({show, setNumPoints, pointsByDifficulty}: 
  {
    show: boolean;
    setNumPoints: (value: number | ((prev: number) => number)) => void;
    pointsByDifficulty: number;
  }
) => {

    return (
      <div className="mole-box">
        {show ? (
            <button type="button" onClick={() => setNumPoints((prev: number) => (prev + pointsByDifficulty))}>TOPO!!!!</button>
        ): (
          <div>nop</div>
        )}
      </div>
    );
  };
  
export default MoleBox;