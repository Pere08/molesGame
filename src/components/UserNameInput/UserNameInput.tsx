import { IUserNameInput } from './UserNameInput.props';
import './UserNameInput.css';

const UserNameInput = ({ defaultValue, setUserName }: IUserNameInput) => {
  return (
    <input
      className="user-name-input"
      type="text"
      defaultValue={defaultValue}
      onChange={(name) => setUserName(name.target.value)}
      placeholder="Insert your name"
    />
  );
};

export default UserNameInput;
