import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { inputVariants } from './input.css';

export type InputProps = React.HTMLAttributes<HTMLInputElement> &
  RecipeVariants<typeof inputVariants>;

const Input = ({
  variant,
  disabled,
  size,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      className={clsx(
        inputVariants({ variant, disabled, size }),
        className,
      )}
      disabled={disabled}
      {...rest}
    />
  );
};

export default Input;
