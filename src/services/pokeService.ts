export const fetchPokemonImages = async (count: number): Promise<string[]> => {
  const pokemonImages: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 151) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    const data = await response.json();
    pokemonImages.push(data.sprites.front_default);
  }

  return pokemonImages;
};

export const loadPokemonImages = async () => {
  try {
    const cache = await caches.open('images-cache');

    const cachedResponses = await cache.matchAll();
    if (cachedResponses.length === 0) {
      const images = await fetchPokemonImages(10);

      for (const image of images) {
        const response = await fetch(image);
        cache.put(image, response);
      }
    }
  } catch (error) {
    console.error('Error loading Pokémon images:', error);
  }
};

export const loadCachedImage = async () => {
  try {
    const cache = await caches.open('images-cache');
    const cachedResponses = await cache.matchAll();

    if (cachedResponses.length > 0) {
      const randomIndex = Math.floor(Math.random() * cachedResponses.length);
      const cachedImage = cachedResponses[randomIndex].url;
      return cachedImage;
    } else {
      console.error('No cached images found');
    }
  } catch (error) {
    console.error('Error loading Pokémon image from cache:', error);
  }
};
