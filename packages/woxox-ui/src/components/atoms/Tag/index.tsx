import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { tagVariants } from './tag.css';

export type TagProps = React.HTMLAttributes<HTMLDivElement> &
  RecipeVariants<typeof tagVariants>;

export const Tag = ({
  variant,
  size,
  className,
  children,
  ...rest
}: TagProps) => {
  return (
    <div
      className={clsx(tagVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </div>
  );
};
