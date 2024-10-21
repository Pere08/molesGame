const API_URL = 'https://pokeapi.co/api/v2/pokemon/50';

export const fetchDiglettImage = async (): Promise<string> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const imageUrl = data.sprites.front_default;

    const cache = await caches.open('images-cache');
    await cache.add(imageUrl);

    return imageUrl;
  } catch (error) {
    console.error('Error fetching Diglett image:', error);
    throw error;
  }
};
