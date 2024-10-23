import { useEffect, useState } from 'react';
import { IMoleBox } from './MoleBox.props';
import { loadCachedImage } from '../../services/pokeService';
import './MoleBox.css';

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
          <img
            className="image-pokeball"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt="Poké Ball"
          />
        </div>
      )}
    </div>
  );
};

export default MoleBox;
