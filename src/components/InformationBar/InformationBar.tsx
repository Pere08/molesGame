import { IInformationBar } from './InformationBar.props';
import { firstCapitalLetter } from '../../utils/utils';
import './InformationBar.scss';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  return (
    <div className="information-bar">
      <button className="user-name-info" type="button">
        Player <span className="user-name">{userName}</span>
      </button>
      <button className="difficulty-selected" type="button">
        Level{' '}
        <span className="difficulty">
          {firstCapitalLetter(difficultyLevel)}
        </span>
      </button>
    </div>
  );
};

export default InformationBar;
