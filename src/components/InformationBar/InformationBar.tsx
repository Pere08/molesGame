import { IInformationBar } from './InformationBar.props';
import './InformationBar.css';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  return (
    <div className="information-bar">
      <button className="user-name-info" type="button">
      Player: {userName}
      </button>
      <button className="difficulty-selected"type="button">
      Level: {difficultyLevel}
      </button>
    </div>
  );
};

export default InformationBar;
