import { useEffect, useState } from "react";
import { fetchDiglettImage } from "../../services/pokeService";

const MoleBox = ({ show, setNumPoints, pointsByDifficulty }: 
  {
    show: boolean;
    setNumPoints: (value: number | ((prev: number) => number)) => void;
    pointsByDifficulty: number;
  }
) => {
  const [diglettImage, setDiglettImage] = useState<string>('');

  useEffect(() => {
    const loadDiglettImage = async () => {
      try {
        const cache = await caches.open('images-cache');
        const cachedResponse = await cache.match('https://pokeapi.co/media/sprites/pokemon/50.png');

        if (cachedResponse) {
          const image = await cachedResponse.url; 
          setDiglettImage(image);
        } else {
          const image = await fetchDiglettImage();
          setDiglettImage(image);
          const response = await fetch(image);
          cache.put('https://pokeapi.co/media/sprites/pokemon/50.png', response);
        }
      } catch (error) {
        console.error('Error loading Diglett image:', error);
      }
    };

    loadDiglettImage();
  }, []);

  return (
    <div className="mole-box">
      {show ? (
        <button type="button" onClick={() => setNumPoints((prev: number) => (prev + pointsByDifficulty))}>
          <img src={diglettImage} alt="Diglett" />
        </button>
      ) : (
        <div>nop</div>
      )}
    </div>
  );
};

export default MoleBox;
