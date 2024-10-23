import { ICustomButton } from './CustomButton.props';
import './CustomButton.css';

const CustomButton = ({
  className,
  name,
  onClick,
  img,
  testId,
}: ICustomButton) => {
  return (
    <button
      data-testid={testId}
      type="button"
      className={className}
      onClick={onClick}
    >
      <div className={`${className}-top`}>
        {img ? (
          <div>
            <img src={img} alt="Poké Ball" />
            <span>{name}</span>
          </div>
        ) : (
          <span>{name}</span>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
