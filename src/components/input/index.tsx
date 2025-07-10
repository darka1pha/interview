'use client';

import styles from './input.module.scss';
import clsx from 'clsx';
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  helperText?: string;
  error?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ helperText, error, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={clsx(styles.input, error && styles.error, className)}
          {...props}
        />
        {helperText && !error && (
          <span className={styles.helperText}>{helperText}</span>
        )}
        {error && helperText && (
          <span className={styles.errorText}>{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
