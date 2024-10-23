import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type Difficulty = 'easy' | 'medium' | 'hard';

const useHome = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState({
    username: false,
    difficulty: false,
  });
  const [userName, setUserName] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>();

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName') || '';
    setUserName(storedUserName);
  }, []);

  const onSubmit = () => {
    setErrorMsg({ username: false, difficulty: false });
    if (userName && difficulty) {
      localStorage.setItem('userName', userName);
      localStorage.setItem('difficulty', difficulty!);
      navigate('/game');
    } else {
      if (!userName) {
        setErrorMsg((prev) => ({ ...prev, username: true }));
      }
      if (!difficulty) {
        setErrorMsg((prev) => ({ ...prev, difficulty: true }));
      }
    }
  };

  return {
    errorMsg,
    userName,
    difficulty,
    setUserName,
    setDifficulty,
    onSubmit,
  };
};

export default useHome;
