import { render, screen, fireEvent } from '@testing-library/react';
import MoleBox from './MoleBox';
import { vi } from 'vitest';
import { fetchDiglettImage } from '../../services/pokeService';

vi.mock('../../services/pokeService', () => ({
  fetchDiglettImage: vi.fn().mockResolvedValue('https://pokeapi.co/media/sprites/pokemon/50.png'),
}));

describe('MoleBox', () => {
  const mockedFetchDiglettImage = fetchDiglettImage as jest.Mock;
  const setNumPointsMock = vi.fn();
  const pointsByDifficulty = 10;

  beforeEach(() => {
    mockedFetchDiglettImage.mockResolvedValue('https://pokeapi.co/media/sprites/pokemon/50.png');
  });

  it('renders correctly when show is true', async () => {
    const setNumPointsMock = vi.fn();
    const pointsByDifficulty = 10;

    render(<MoleBox show={true} setNumPoints={setNumPointsMock} pointsByDifficulty={pointsByDifficulty} />);

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('does not render button when show is false', () => {
    const setNumPointsMock = vi.fn();
    const pointsByDifficulty = 10;

    render(<MoleBox show={false} setNumPoints={setNumPointsMock} pointsByDifficulty={pointsByDifficulty} />);
    
    const nopText = screen.getByText(/nop/i);
    expect(nopText).toBeInTheDocument();
  });

  it('calls setNumPoints when the button is clicked', async () => {
    render(<MoleBox show={true} setNumPoints={setNumPointsMock} pointsByDifficulty={pointsByDifficulty} />);

    const button = await screen.findByRole('button');
    await fireEvent.click(button);

    expect(setNumPointsMock).toHaveBeenCalledWith(expect.any(Function));
    const setPointsFunction = setNumPointsMock.mock.calls[0][0];
    expect(setPointsFunction(0)).toBe(10);
  });
});
