import { render, screen, fireEvent } from '@testing-library/react';
import MoleBox from './MoleBox';
import { vi } from 'vitest';

vi.mock('../../services/pokeService', () => ({
  loadCachedImage: vi.fn().mockResolvedValue('https://pokeapi.co/media/sprites/pokemon/50.png'),
}));

describe('MoleBox', () => {
  const setNumPointsMock = vi.fn();
  const pointsByDifficulty = 10;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly when show is true', async () => {
    render(
      <MoleBox
        show={true}
        setNumPoints={setNumPointsMock}
        pointsByDifficulty={pointsByDifficulty}
      />,
    );

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
    expect(await screen.findByAltText('Random Pokémon')).toBeInTheDocument(); // Verificar que la imagen se haya cargado
  });

  it('does not render button when show is false', () => {
    render(
      <MoleBox
        show={false}
        setNumPoints={setNumPointsMock}
        pointsByDifficulty={pointsByDifficulty}
      />,
    );

    const nopText = screen.getByText(/nop/i);
    expect(nopText).toBeInTheDocument();
  });

  it('calls setNumPoints when the button is clicked', async () => {
    render(
      <MoleBox
        show={true}
        setNumPoints={setNumPointsMock}
        pointsByDifficulty={pointsByDifficulty}
      />,
    );

    const button = await screen.findByRole('button');
    await fireEvent.click(button);

    expect(setNumPointsMock).toHaveBeenCalledWith(expect.any(Function));
    const setPointsFunction = setNumPointsMock.mock.calls[0][0];
    expect(setPointsFunction(0)).toBe(10);
  });
});
