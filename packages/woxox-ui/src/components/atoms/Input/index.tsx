import { useCallback } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { Text } from '@/components/atoms/Text';
import { baseToken } from '@/themes/theme.css';

import { inputVariants } from './input.css';

export type InputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  label: string;
  onChange: (value: string) => void;
} & RecipeVariants<typeof inputVariants>;

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
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: baseToken.spacing['0.5'],
      }}
    >
      <Text fontSize="12">{label}</Text>
      <input
        className={clsx(
          inputVariants({ variant, disabled, size }),
          className,
        )}
        disabled={disabled}
        onChange={handleChangeInput}
        {...rest}
      />
    </div>
  );
};

export default Input;
