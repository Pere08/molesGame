import { IInformationBar } from './InformationBar.props';
import { firstCapitalLetter } from '../../utils/utils';
import './InformationBar.scss';
import { useTranslation } from 'react-i18next';

const InformationBar = ({ userName, difficultyLevel }: IInformationBar) => {
  const { t } = useTranslation();

  return (
    <div className="information-bar">
      <button className="user-name-info" type="button">
        {t('game.player')} <span className="user-name">{userName}</span>
      </button>
      <button className="difficulty-selected" type="button">
        {t('game.level')}
        <span className="difficulty">
          {firstCapitalLetter(difficultyLevel)}
        </span>
      </button>
    </div>
  );
};

export default InformationBar;
