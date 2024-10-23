import { ICustomButton } from './CustomButton.props';
import './CustomButton.css';

const CustomButton = ({ testId, className, name, onClick, img }: ICustomButton) => {
  return (
    <button
      type="button"
      data-testid={testId}
      className={className}
      onClick={onClick}
    >
      <div className={`${className}-top`}>
        {
          img ? (
            <div>
              <img src={img} alt="Poké Ball" />
              <span>{name}</span>
            </div>
          ) : (
            <span>{name}</span>
          )
        }
      </div>
    </button>
  );
};

export default CustomButton;
