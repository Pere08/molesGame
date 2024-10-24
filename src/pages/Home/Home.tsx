import { useTranslation } from 'react-i18next';
import ChooseDifficulty from '../../components/ChooseDifficulty/ChooseDifficulty';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import useHome, { Difficulty } from '../../hooks/useHome';
import './Home.scss';

const Home = () => {
  const { t } = useTranslation();
  const { errorMsg, userName, setUserName, setDifficulty, onSubmit } =
    useHome();

  const difficultyList: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">{t('home.title')}</h1>
        <h3 className="sub-title">{t('home.subTitle')}</h3>
      </div>

      <div className="input-username" data-testid="username-input">
        <UserNameInput defaultValue={userName} setUserName={setUserName} />
        {errorMsg.username && (
          <span className="error-msg" data-testid="error-msg-username">
            {t('home.errorMsg.userName')}
          </span>
        )}
      </div>

      <div className="choose-difficulty" data-testid="difficulty-choice">
        <ChooseDifficulty
          difficultyList={difficultyList}
          setDifficulty={setDifficulty}
        />
        {errorMsg.difficulty && (
          <span className="error-msg" data-testid="error-msg-difficulty">
            {t('home.errorMsg.difficulty')}
          </span>
        )}
      </div>

      <div className="button-container">
        <CustomButton
          testId="start-button"
          className="play-button"
          onClick={onSubmit}
          name={t('home.playButton')}
        />
      </div>
    </div>
  );
};

export default Home;
