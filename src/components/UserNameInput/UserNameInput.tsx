const UserNameInput = ({setUserName}: {setUserName: (value: string) => void}) => {
    return (
      <input type="text" onChange={(name) => setUserName(name.target.value)}/>
    );
  };
  
export default UserNameInput;