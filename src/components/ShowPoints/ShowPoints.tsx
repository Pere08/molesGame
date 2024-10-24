import { useTranslation } from 'react-i18next';
import { IShowPoints } from './ShowPoints.props';
import './ShowPoints.scss';

const ShowPoints = ({ numPoints }: IShowPoints) => {
  const { t } = useTranslation();
  return (
    <button className="show-points">
      {t('game.points')} <span className="points">{numPoints}</span>
    </button>
  );
};

export default ShowPoints;
