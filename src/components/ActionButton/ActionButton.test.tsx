import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('should render START button when togglingState is false', () => {
    render(<ActionButton togglingState={false} start={() => {}} stop={() => {}} />);
    
    const startButton = screen.getByRole('button', { name: /start/i });
    expect(startButton).toBeInTheDocument();
  });

  it('should render STOP button when togglingState is true', () => {
    render(<ActionButton togglingState={true} start={() => {}} stop={() => {}} />);
    
    const stopButton = screen.getByRole('button', { name: /stop/i });
    expect(stopButton).toBeInTheDocument();
  });

  it('should call start function when START button is clicked', () => {
    const startMock = vi.fn(); 
    const stopMock = vi.fn();  
    
    render(<ActionButton togglingState={false} start={startMock} stop={stopMock} />);
    
    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);
    
    expect(startMock).toHaveBeenCalled(); 
  });

  it('should call stop function when STOP button is clicked', () => {
    const startMock = vi.fn();
    const stopMock = vi.fn(); 
    
    render(<ActionButton togglingState={true} start={startMock} stop={stopMock} />);
    
    const stopButton = screen.getByRole('button', { name: /stop/i });
    fireEvent.click(stopButton);
    
    expect(stopMock).toHaveBeenCalled();
  });
});
