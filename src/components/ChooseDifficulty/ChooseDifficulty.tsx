import { Difficulty } from '../../pages/Home/Home';
import CustomButton from '../CustomButton/CustomButton';
import { IChooseDifficulty } from './ChooseDifficulty.props';
import './ChooseDifficulty.css';
import { allImages, difficutlyImg, firstCapitalLetter } from '../../utils/utils';
import { cacheImage, getCachedImage } from '../../services/pokeService';
import { useEffect, useState } from 'react';

const ChooseDifficulty = ({
  difficultyList,
  setDifficulty,
}: IChooseDifficulty) => {
  const [imgList, setImgList] = useState<(string | undefined)[]>([]);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const difficultyHandler = (difficulty: Difficulty) => {
    setDifficulty(difficulty);
  };

  useEffect(() => {
    const arr = allImages.map((img) => {
      return cacheImage(img);
    })
    Promise.all(arr).then(() => {setIsImgLoaded(true)});
  }, []);

  useEffect(() => {
    Promise.all(
      Object.values(difficutlyImg).map(async (img) => {
        const blobImg = await getCachedImage(img);
        return blobImg;
      }),
    ).then((data) => {
      setImgList([...data]);
    });
  }, [isImgLoaded]);

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
        );
      })}
    </div>
  );
};

export default ChooseDifficulty;
