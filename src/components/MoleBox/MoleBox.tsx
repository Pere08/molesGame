import { useEffect, useState } from 'react';
import { IMoleBox } from './MoleBox.props';
import { getCachedImage, loadCachedImage } from '../../services/pokeService';
import './MoleBox.css';
import { pokeballImg } from '../../utils/utils';

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

  return (
    <div className="mole-box">
      {show ? (
        <div
          className="image-container"
          onClick={() => setNumPoints((prev) => prev + pointsByDifficulty)}
        >
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
