import { useCallback, useState } from 'react';

export const useInputArray = () => {

    const [text, setText] = useState("aaa");
    const [isShow, setIsShow] = useState(true);
  
    const handleInput = useCallback((e) => {
      setText(e.target.value)
    }, []);
  
    const handleShow = useCallback(() => {
      setIsShow((isShow) => { return !isShow});
    }, []);
  
    return {text, isShow, handleInput, handleShow};
  };
