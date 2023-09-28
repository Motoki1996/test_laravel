import { useEffect } from 'react';

export const useSetBGColor = () => {
  useEffect(() => {
    console.log("aaa");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      document.body.style.backgroundColor = "lightblue";
    }    
  }, [])
}