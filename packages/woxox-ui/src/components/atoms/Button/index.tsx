import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { buttonVariants } from './button.css';

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  RecipeVariants<typeof buttonVariants> & {};

export const Button = ({
  disabled,
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(buttonVariants({ disabled }), className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
