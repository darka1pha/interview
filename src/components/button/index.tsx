import clsx from 'clsx';
import styles from './button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};

export default Button;
