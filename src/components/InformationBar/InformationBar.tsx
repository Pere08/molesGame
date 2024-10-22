import { IInformationBar } from './InformationBar.props';
import './InformationBar.css';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  return (
    <div className="information-bar">
      <div className="user-name-info">Player: {userName}</div>
      <div className="difficulty-selected">Level: {difficultyLevel}</div>
    </div>
  );
};

export default InformationBar;
