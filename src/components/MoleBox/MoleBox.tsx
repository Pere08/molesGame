import { useEffect, useState } from 'react';
import { IMoleBox } from './MoleBox.props';
import { loadCachedImage } from '../../services/pokeService';

const MoleBox = ({ show, setNumPoints, pointsByDifficulty }: IMoleBox) => {
  const [pokemonImage, setPokemonImage] = useState<string>('');

  useEffect(() => {
    loadCachedImage().then((cachedImage) => {
      if (cachedImage) {
        setPokemonImage(cachedImage);
      }
    });
  }, []);

  return (
    <div className="mole-box">
      {show ? (
        <button
          type="button"
          onClick={() => setNumPoints((prev) => prev + pointsByDifficulty)}
        >
          <img src={pokemonImage} alt="Random Pokémon" />
        </button>
      ) : (
        <div>HOLA</div>
      )}
    </div>
  );
};

export default MoleBox;
