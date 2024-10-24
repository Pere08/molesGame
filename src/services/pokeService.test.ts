import { vi, describe, it, expect } from 'vitest';
import { fetchPokemonImages } from './pokeService';

describe('Pokemon Service', () => {
  describe('fetchPokemonImages', () => {
    it('should fetch images for a given count', async () => {
      const mockResponse = {
        sprites: { front_default: 'http://example.com/image.png' },
      };
      global.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockResponse),
      });

      const images = await fetchPokemonImages(3);
      expect(images.length).toBe(3);
      images.forEach((image) => {
        expect(typeof image).toBe('string');
        expect(image).toMatch(/\.png$/);
      });
    });

    it('should handle errors gracefully', async () => {
      global.fetch = vi.fn(() => Promise.reject('API is down'));

      await expect(fetchPokemonImages(1)).rejects.toEqual('API is down');
    });
  });
});
