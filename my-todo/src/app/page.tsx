"use client"

import Image from 'next/image'
import React, { HtmlHTMLAttributes, useState, useEffect } from 'react'
import { Header } from './components/header'
import { Content } from './components/content'
import classes from './page.module.css'
import { type } from 'os'
import content from '*.png'
import { handleClientScriptLoad } from '../../node_modules/next/script'

type Todo = {
  id: number
  text: string
  done: boolean
}

type ViewCondition = {
  resistence: boolean
  toxicant: boolean
}

type Content = {
  title: string
  description: string
  imagePath: string
  resistence: boolean
}

const initialTodos: Todo[] = [
  {id: 1, text: 'aaa', done: false},
  {id: 2, text: 'bbbbb', done: false},
  {id: 3, text: 'cc', done: false}
]

const CONTENTS = [
  {
    title: 'Docs ',
    description: '説明（なんて書いてあったか忘れた）',
    imagePath: '/img/contents/content_1.png', 
    resistence: false,
    toxicant: true
  },
  {
    title: 'Learn ',
    description: 'Learn about Next.js in an interactive course with&nbsp;quizzes!',
    imagePath: '/img/contents/content_2.png',
    resistence: false,
    toxicant: false
  },
  {
    title: 'Templates ',
    description: 'Explore the Next.js 13 playground.',
    imagePath: '/img/contents/content_3.png',
    resistence: false,
    toxicant: true
  },
  {
    title: 'Deploy ',
    description: 'Instantly deploy your Next.js site to a shareable URL with Vercel.',
    imagePath: '/img/contents/content_4.png',
    resistence: true,
    toxicant: false
  },
];


export default function Home() {
  const [count, setCount] = useState<number>(1);
  const [viewCondition, setView] = useState<ViewCondition>({resistence: false, toxicant: false});

  const handleClick = () => {
    setCount((count) => count * 2);
  };

  const handleView = (resistence: boolean, toxicant: boolean) => {
    if (resistence) {
      setView(() => {
        let newCondition: ViewCondition = {
          resistence: false,
          toxicant: false,
        };
        newCondition.resistence = true;
        return newCondition;
      });
    }
    
    if (toxicant) {
      setView(() => {
        let newCondition: ViewCondition = {
          resistence: false,
          toxicant: false,
        };
        newCondition.toxicant = true;
        return newCondition;
      });
    }
  }; 

  const filteredList = CONTENTS.filter((content) => {
    if (!(viewCondition.resistence || viewCondition.toxicant)) {
      return true;
    } else {
      if (viewCondition?.resistence && content.resistence) {
        return true;
      } else if (viewCondition?.toxicant && content.toxicant) {
        return true;
      } else {
        return false;
      }
    }
  })
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>サイドバー</div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Header title="Get started by editing "  path="Get started by editing src/app/page.tsx"  />
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

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

      <h2>2のn乗{count}</h2>
      <button onClick={handleClick} >ボタン</button>
      <button onClick={() => handleView(true, false)} >レジスタンスフィルタ</button>
      <button onClick={() => handleView(false, true)} >トキシカントフィルタ</button>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {
          filteredList.map((content) => (
            <Content title={content.title} description={content.description} imagePath={content.imagePath} />
          ))
        }
      </div>
    </main>
  )
}
