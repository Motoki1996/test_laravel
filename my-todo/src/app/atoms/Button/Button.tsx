import { type } from 'os';
import React, { HtmlHTMLAttributes } from 'react';
import { text } from 'stream/consumers';

type ButtonProps = {
  text: string;
  onClick?: (e: MouseEvent) => void;
};

export function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className='bg-blue-500 rounded py-1 px-3'>{props.text}</button>
  );
};