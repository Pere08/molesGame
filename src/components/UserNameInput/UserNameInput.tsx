import { IUserNameInput } from './UserNameInput.props';
import "./UserNameInput.scss"

const UserNameInput = ({ defaultValue, setUserName }: IUserNameInput) => {
  return (
    <input
      className='user-name-input'
      type="text"
      defaultValue={defaultValue}
      onChange={(name) => setUserName(name.target.value)}
    />
  );
};

export default UserNameInput;
