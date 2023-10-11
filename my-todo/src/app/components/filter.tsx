import Image from 'next/image'
import React, { HtmlHTMLAttributes, useState } from 'react'

type Props = {
    title: string
    description: string
    imagePath?: string
    viewCondition: ViewCondition
};

type ViewCondition = {
  resistence: boolean
  toxicant: boolean
}

export function Filter(props: Props) {
  const [viewCondition, setView] = useState<ViewCondition>({resistence: false, toxicant: false});


  return (
    <label htmlFor={props.title}>
      <input type="checkbox" id={props.title} onChange={(e) => handleView(e.target.checked, props.title)} />レジスタンス
    </label>
  )
}
