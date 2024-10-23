// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck The 'vi' namespace is not recognized by TypeScript
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import MoleBox from './MoleBox';
import { getCachedImage, loadCachedImage } from '../../services/pokeService';

vi.mock('../../services/pokeService', () => ({
  getCachedImage: vi.fn(),
  loadCachedImage: vi.fn(),
}));

describe('MoleBox', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders pokeball image when show is false', async () => {
    (getCachedImage as vi.Mock).mockResolvedValue(Promise.resolve('cached-pokeball-image'));
    (loadCachedImage as vi.Mock).mockResolvedValue(Promise.resolve('cached-pokemon-image'));

    render(<MoleBox show={false} setNumPoints={() => {}} pointsByDifficulty={1} />);

    const pokeballImage = await screen.findByAltText('Poké Ball');
    expect(pokeballImage).toBeInTheDocument();
    expect(pokeballImage).toHaveAttribute('src', 'cached-pokeball-image');
  });

  it('renders pokemon image when show is true', async () => {
    (loadCachedImage as vi.Mock).mockResolvedValue(Promise.resolve('cached-pokemon-image'));

    render(<MoleBox show={true} setNumPoints={() => {}} pointsByDifficulty={1} />);

    const pokemonImage = await screen.findByAltText('Random Pokémon');
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', 'cached-pokemon-image');
  });

  it('increments points by difficulty when pokemon is clicked', async () => {
    const setNumPoints = vi.fn();
    (loadCachedImage as vi.Mock).mockResolvedValue(Promise.resolve('cached-pokemon-image'));

    render(<MoleBox show={true} setNumPoints={setNumPoints} pointsByDifficulty={5} />);

    const pokemonImage = await screen.findByAltText('Random Pokémon');
    fireEvent.click(pokemonImage);

    expect(setNumPoints).toHaveBeenCalled();
  });
});
