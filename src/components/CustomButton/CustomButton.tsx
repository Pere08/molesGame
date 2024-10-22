import { ICustomButton } from "./CustomButton.props";

const CustomButton = ({ name, onClick }: ICustomButton) => {
  return (
    <button
      className="difficulty-button"
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default CustomButton;
