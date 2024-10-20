import { IInformationBar } from './InformationBar.props';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  return (
    <div className="information-bar">
      <div className="user-name-info">{userName}</div>
      <div className="difficulty-selected">{difficultyLevel}</div>
    </div>
  );
};

export default InformationBar;
