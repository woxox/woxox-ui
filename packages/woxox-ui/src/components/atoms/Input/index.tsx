import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { inputVariants } from './input.css';

export type InputProps = React.HTMLAttributes<HTMLInputElement> &
  RecipeVariants<typeof inputVariants>;

const Input = ({ variant, className, ...rest }: InputProps) => {
  return (
    <input
      className={clsx(inputVariants({ variant }), className)}
      {...rest}
    />
  );
};

export default Input;
