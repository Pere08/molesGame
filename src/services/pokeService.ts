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
        await cache.put(image, response);
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
      const cachedResponse = cachedResponses[randomIndex];
      const blob = await cachedResponse.blob();
      const cachedImage = URL.createObjectURL(blob);

      return cachedImage;
    } else {
      console.error('No cached images found');
    }
  } catch (error) {
    console.error('Error loading Pokémon image from cache:', error);
  }
};

export const cacheImage = async (imageUrl: string) => {
  try {
    const cache = await caches.open('images-cache');
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Error al descargar la imagen: ${response.statusText}`);
    }
    await cache.put(imageUrl, response);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getCachedImage = async (
  imageUrl: string,
): Promise<string | undefined> => {
  try {
    const cache = await caches.open('images-cache');
    const cachedResponse = await cache.match(imageUrl);

    if (cachedResponse) {
      const blob = await cachedResponse.blob();
      const cachedImage = URL.createObjectURL(blob);

      return cachedImage;
    } else {
      console.error('Imagen not found');
      return undefined;
    }
  } catch (error) {
    console.error('Error:', error);
    return undefined;
  }
};
