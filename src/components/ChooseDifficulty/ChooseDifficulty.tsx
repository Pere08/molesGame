import { Difficulty } from '../../pages/Home/Home';
import CustomButton from '../CustomButton/CustomButton';
import { IChooseDifficulty } from './ChooseDifficulty.props';
import './ChooseDifficulty.css';
import { difficutlyImg, firstCapitalLetter } from '../../utils/utils';
import { getCachedImage } from '../../services/pokeService';
import { useEffect, useState } from 'react';

const ChooseDifficulty = ({
  difficultyList,
  setDifficulty,
}: IChooseDifficulty) => {
  const [imgList, setImgList] = useState<(string | undefined)[]>([]);
  const difficultyHandler = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  useEffect(() => {
    Promise.all(
      Object.values(difficutlyImg).map(async (img) => {
        const blobImg = await getCachedImage(img);
        return blobImg;
      }),
    ).then((data) => {
      setImgList([...data]);
    });
  }, []);


  return (
    <div className="choose-difficulty-button-box">
      {difficultyList.map((name, index) => {
        return (
          <CustomButton
            data-testid="difficulty-button"
            className="difficulty-button"
            key={`${name}-${index}`}
            name={firstCapitalLetter(name)}
            onClick={() => difficultyHandler(name as Difficulty)}
            img={imgList[index] ?? ''}
          />
        )
      })}
    </div>
  );
};

export default ChooseDifficulty;
