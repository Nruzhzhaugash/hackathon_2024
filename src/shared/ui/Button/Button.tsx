import React from 'react';
import cn from 'classnames';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  label: string;
}

export default function Button({ className, label, ...rest }: IButton) {
  return (
    <button 
      className={cn(className, 'outline-none border-none')}
      {...rest}
    >
      {label}
    </button>
  )
}