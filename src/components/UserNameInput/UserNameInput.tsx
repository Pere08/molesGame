import { IUserNameInput } from "./UserNameInput.props";

const UserNameInput = ({
  defaultValue,
  setUserName
}: IUserNameInput
) => {
    return (
      <input type="text" defaultValue={defaultValue} onChange={(name) => setUserName(name.target.value)}/>
    );
  };
  
export default UserNameInput;