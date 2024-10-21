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
      const storedImage = localStorage.getItem('diglettImage');
      if (storedImage) {
        setDiglettImage(storedImage);
      } else {
        try {
          const cache = await caches.open('images-cache');
          console.log('PERE CAHCHE ----> ', cache);
          
          const cachedResponse = await cache.match('https://pokeapi.co/media/sprites/pokemon/50.png');

          if (cachedResponse) {
            const image = await cachedResponse.url;
            setDiglettImage(image);
          } else {
            const image = await fetchDiglettImage();
            setDiglettImage(image);
            localStorage.setItem('diglettImage', image);
          }
        } catch (error) {
          console.error('Error loading Diglett image:', error);
        }
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
