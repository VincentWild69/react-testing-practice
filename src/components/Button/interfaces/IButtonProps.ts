import React from 'react';

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode,
  clear?: boolean,
  className?: string,
  type?: 'button' | 'submit' | 'reset' | undefined
}
