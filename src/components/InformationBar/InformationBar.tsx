const InformationBar = ({userName, difficultyLevel}: {userName: string; difficultyLevel: string}) => {

    return (
      <div className="information-bar">
        <div className="user-name-info">
            {userName}
        </div>
        <div className="difficulty-selected">
            {difficultyLevel}
        </div>
      </div>
    );
  };
  
export default InformationBar;