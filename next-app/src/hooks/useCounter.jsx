import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [Count, setCount] = useState(2);
  const [array, setArray] = useState([3]);

  const handleClick  = useCallback( (e) => {
    console.log(Count);
    setCount((Count) => Count + 1);
  },[]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      return [...prevArray, prevArray.length + 1];
    });
  }, []);

  return {Count, array, handleClick, handleAdd};
};

