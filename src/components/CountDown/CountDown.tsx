import { useTranslation } from 'react-i18next';
import useCountDown from '../../hooks/useCountDown';
import { ICountDown } from './CountDown.props';
import './CountDown.scss';

const CountDown = ({ initialTime, isActive, onTimerEnd }: ICountDown) => {
  const { t } = useTranslation();
  const milliseconds = useCountDown(initialTime, isActive, onTimerEnd);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const miliseconds = String(ms % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${miliseconds}`;
  };

  return (
    <button className="counter">
      {t('game.time')} <span className="count">{formatTime(milliseconds)}</span>
    </button>
  );
};

export default CountDown;
