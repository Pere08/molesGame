import { ICustomButton } from './CustomButton.props';

const CustomButton = ({ className, name, onClick }: ICustomButton) => {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default CustomButton;
