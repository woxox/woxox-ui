import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import { tagVariants } from './tag.css';

export type TagProps = React.HTMLAttributes<HTMLDivElement> &
  RecipeVariants<typeof tagVariants>;

const Tag = ({
  color,
  size,
  className,
  children,
  ...rest
}: TagProps) => {
  return (
    <div
      className={clsx(tagVariants({ color, size }), className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Tag;
