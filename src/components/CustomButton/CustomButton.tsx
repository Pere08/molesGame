import { ICustomButton } from './CustomButton.props';

const CustomButton = ({ testId, className, name, onClick }: ICustomButton) => {
  return (
    <button data-testid={testId} className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default CustomButton;
