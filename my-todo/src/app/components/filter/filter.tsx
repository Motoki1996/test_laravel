import Image from 'next/image'
import { useView } from '../hooks/useView'
import React, { HtmlHTMLAttributes, useState } from 'react'

type Props = {
    title: string
    description: string
};

export function Content(props: Props) {
  const {viewCondition, handleView } = useView();

  return (
    <div className='flex flex-col' >
      <label className='shadow mx-2' htmlFor="resistence">
        <input type="checkbox" id="resistence" onChange={(e) => handleView(e.target.checked, "resistence")} />レジスタンス
      </label>
      <label className='shadow mx-2' htmlFor="toxicant">
        <input type="checkbox" id="toxicant" onChange={(e) => handleView(e.target.checked, "toxicant")} />トキシカント
      </label>
    </div>
  )
}
