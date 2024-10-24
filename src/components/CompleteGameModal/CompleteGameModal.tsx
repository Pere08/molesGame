import { useTranslation } from 'react-i18next';
import './CompleteGameModal.scss';

const ICompleteGameModal = ({
  points,
  playAgainFn,
  closeGameFn,
  isVisible,
}: {
  isVisible: boolean;
  points: number;
  playAgainFn: () => void;
  closeGameFn: () => void;
}) => {
  const { t } = useTranslation();
  if (!isVisible) return null;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h4>{t('game.completeGame.thanks')}</h4>
        <h4>
          {t('game.points')}: {points}
        </h4>
        <div className="buttons-container">
          <button type="button" onClick={playAgainFn}>
            {t('game.completeGame.play')}
          </button>
          <button type="button" onClick={closeGameFn}>
            {t('game.completeGame.noPlay')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ICompleteGameModal;
