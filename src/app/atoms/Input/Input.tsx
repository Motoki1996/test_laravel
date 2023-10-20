import React, { HtmlHTMLAttributes } from 'react';

type InputProps = {
    id?: string;
    value: string;
    type: "text" | "password";
    onChange: (value: string) => void;
};

export function Input(props: InputProps) {
    return (
        <input id={props.id} value={props.value} type={props.type} onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)} className='mx-2 text-black h-8 w-auto rounded' ></input>
    );
};