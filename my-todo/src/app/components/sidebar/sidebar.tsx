import Image from 'next/image'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { useView } from '../hooks'  

type Props = {
    title: string
    description: string
    imagePath?: string
};

export function Sidebar(props: Props) {

  return (
    <div className="bg-blue-800 w-40 border-4 border-blue-950 text-center" >
    <span className='' >フィルタ</span>
    
    <div className='flex flex-col' >
      <label className='shadow mx-2' htmlFor="resistence">
        <input type="checkbox" id="resistence" onChange={(e) => handleView(e.target.checked, "resistence")} />レジスタンス
      </label>
      <label className='shadow mx-2' htmlFor="toxicant">
        <input type="checkbox" id="toxicant" onChange={(e) => handleView(e.target.checked, "toxicant")} />トキシカント
      </label>
    </div>
  </div>
  )
}
