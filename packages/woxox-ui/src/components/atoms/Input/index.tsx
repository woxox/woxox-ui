import { useCallback } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { Text } from '@/components/atoms/Text';

import { inputInnerStyle, inputOuterVariants } from './input.css';

export type InputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label: string;
  onChange: (value: string) => void;
} & RecipeVariants<typeof inputOuterVariants>;

const Input = ({
  variant,
  disabled,
  size,
  onChange,
  className,
  label,
  ...rest
}: InputProps) => {
  const handleChangeInput = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(
    (e) => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <div
      className={clsx(
        inputOuterVariants({ variant, disabled, size }),
        className,
      )}
    >
      <Text fontSize="12">{label}</Text>
      <input
        className={clsx(inputInnerStyle, className)}
        disabled={disabled}
        onChange={handleChangeInput}
        {...rest}
      />
    </div>
  );
};

export default Input;
