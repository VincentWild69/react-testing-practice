import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { IButtonProps } from './interfaces/IButtonProps';

const Button: React.FC<IButtonProps> = ({
  children, clear = false, className, ...props
}) => {
  return (
    <button
      type="button"
      className={
        clsx({
          [styles.customBtn]: !clear,
          [`${className}`]: className
        })
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
