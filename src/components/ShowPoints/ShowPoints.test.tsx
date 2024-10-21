import { render, screen } from '@testing-library/react';
import ShowPoints from './ShowPoints';

describe('ShowPoints', () => {
  it('renders correctly with the provided numPoints', () => {
    const numPoints = 42;
    render(<ShowPoints numPoints={numPoints} />);

    const pointsDisplay = screen.getByText(numPoints.toString());
    expect(pointsDisplay).toBeInTheDocument();
  });
});
