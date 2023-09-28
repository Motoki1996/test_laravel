import '@/styles/globals.css'
//インポート
// import { useCounter } from 'src/hooks/useCounter';
// import { useInputArray } from 'src/hooks/useInputArray';
// import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

export default function App({ Component, pageProps }) {
  //useCounterで設定した変数や初期値をcunterに代入。
//   const counter = useCounter();
//   const inputArray = useInputArray();
//   useBgLightBlue();

  return (
    //counterの中身を展開してpropsとして渡す
    <Component />
  )
}

