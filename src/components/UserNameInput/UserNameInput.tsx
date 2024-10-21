const UserNameInput = ({
  defaultValue,
  setUserName
}: {
    defaultValue: string;
    setUserName: (value: string) => void}
) => {
    return (
      <input type="text" defaultValue={defaultValue} onChange={(name) => setUserName(name.target.value)}/>
    );
  };
  
export default UserNameInput;