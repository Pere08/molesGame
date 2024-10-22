import { ICustomButton } from './CustomButton.props';
import './CustomButton.css';

const CustomButton = ({ testId, className, name, onClick }: ICustomButton) => {
  return (
    <button
      type="button"
      data-testid={testId}
      className={className}
      onClick={onClick}
    >
      <div className={`${className}-top`}>{name}</div>
      <div className={`${className}-bottom`}></div>
      <div className={`${className}-base`}></div>
    </button>
  );
};

export default CustomButton;
