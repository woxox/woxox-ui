import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { Text } from '@/components/atoms/Text';
import { baseToken, colorToken } from '@/themes/theme.css';

import { inputVariants } from './input.css';
import { COLOR_PALETTE } from '@/themes/tokens/color-palette';

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  label: string;
  value: string | number | readonly string[] | undefined;
  placeholder: string | undefined;
} & RecipeVariants<typeof inputVariants>;

const Input = ({
  variant,
  disabled,
  size,
  className,
  label,
  value,
  placeholder,
  ...rest
}: InputProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: baseToken.spacing['0.5'],
      }}
    >
      <Text style={{ ...baseToken.fontSize[12] }}>{label}</Text>
      <input
        className={clsx(
          inputVariants({ variant, disabled, size }),
          className,
        )}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
