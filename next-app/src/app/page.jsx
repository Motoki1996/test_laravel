"use client";

import Image from 'next/image'
import contents from './contents.json' assert {type: 'json'};
import { Comp } from "../components/Comp";
import { Header } from "../components/Header";
import { useCounter } from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useSetBGColor } from "../hooks/useSetBGColor";
import { useCallback, useEffect, useMemo, useState } from 'react';

// let CONTENT_DATA = [
//   {
//     name: "Docs", 
//     content: "Find in-depth information about Next.js features and API."
//   },
//   {
//     name: "Learn", 
//     content: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
//   },
//   {
//     name: "Templates", 
//     content: "Explore the Next.js 13 playground."
//   },
//   {
//     name: "Deploy", 
//     content: "Instantly deploy your Next.js site to a shareable URL with Vercel."
//   },
// ];


export default function Home(props) {

  let CONTENT_DATA = contents.contents;

  console.log(props);
  const {Count, array, handleClick, handleAdd} = useCounter();
  const {text, isShow, handleInput, handleShow} = useInputArray();
  useSetBGColor();

  const style = "text-black";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {isShow ? <h2>{Count}</h2> : null}
      <button onClick={handleClick}>クリックしてください</button>
      <button onClick={handleAdd}>Click</button>
      <button 
        onClick={handleShow}
      >{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleInput} className={style} />
      <ul>
        {array.map(item => {
          return(
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        {CONTENT_DATA.map((value) => (
          <Comp name={value.name} content={value.description} />
        ))}

      </div>
    </main>
  )
}
