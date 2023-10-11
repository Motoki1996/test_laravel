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
      <label htmlFor="resistence">
          <input type="checkbox" id={props.title} onChange={(e) => handleView(e.target.checked, props.title)} />{props.description}
      </label>
  )
}
