import { useEffect, useState } from 'react';
import { IMoleBox } from './MoleBox.props';
import { getCachedImage, loadCachedImage } from '../../services/pokeService';
import './MoleBox.css';
import { pokeballImg, vibrate } from '../../utils/utils';

const MoleBox = ({ show, setNumPoints, pointsByDifficulty }: IMoleBox) => {
  const [pokemonImage, setPokemonImage] = useState<string>('');
  const [pokeBallImg, setPokeBallImg] = useState<string>();

  useEffect(() => {
    loadCachedImage().then((cachedImage) => {
      if (cachedImage) {
        setPokemonImage(cachedImage);
      }
    });
    getCachedImage(pokeballImg).then((img) => {
      if (img) {
        setPokeBallImg(img);
      }
    });
  }, []);

  const handleClick = () => {
    vibrate();
    setNumPoints((prev) => prev + pointsByDifficulty);
  };

  return (
    <div className="mole-box">
      {show ? (
        <div className="image-container" onClick={handleClick}>
          <img
            className="image-pokemon"
            src={pokemonImage}
            alt="Random Pokémon"
          />
        </div>
      ) : (
        <div className="image-container">
          <img className="image-pokeball" src={pokeBallImg} alt="Poké Ball" />
        </div>
      )}
    </div>
  );
};

export default MoleBox;
