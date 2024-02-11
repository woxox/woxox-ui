import { useCallback } from 'react';
import { HiCheck } from 'react-icons/hi';

import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { useControlled } from '@/hooks/useControlled';

import { checkboxIconStyle, checkboxVariants } from './checkbox.css';

export type CheckboxProps = Omit<
  React.HTMLAttributes<HTMLButtonElement>,
  'onClick'
> &
  RecipeVariants<typeof checkboxVariants> & {
    onClick?: (checked: boolean) => void;
  };

const Checkbox = ({
  checked: checkedProp,
  disabled,
  defaultChecked,
  className,
  onClick,
  ...rest
}: CheckboxProps) => {
  const [checked, setChecked] = useControlled<boolean>(
    defaultChecked ?? false,
    checkedProp,
  );

  const handleClickCheckbox = useCallback(() => {
    onClick?.(!checked);
    setChecked((prev) => !prev);
  }, [checked, onClick, setChecked]);

  return (
    <button
      data-active={checked}
      className={clsx(
        checkboxVariants({ checked, disabled }),
        className,
      )}
      onClick={handleClickCheckbox}
      disabled={disabled}
      {...rest}
    >
      <HiCheck className={checkboxIconStyle} />
    </button>
  );
};

export default Checkbox;
