import { IInformationBar } from './InformationBar.props';
import { firstCapitalLetter } from '../../utils/utils';
import './InformationBar.css';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  return (
    <div className="information-bar">
      <button className="user-name-info" type="button">
        Player {userName}
      </button>
      <button className="difficulty-selected" type="button">
        Level {firstCapitalLetter(difficultyLevel)}
      </button>
    </div>
  );
};

export default InformationBar;
