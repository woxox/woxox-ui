import { HiUserCircle } from 'react-icons/hi';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';

import { avatarImage, avatarVariants } from './avatar.css';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string | undefined;
} & RecipeVariants<typeof avatarVariants>;

const Avatar = ({
  src,
  disabled,
  size,
  className,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={clsx(avatarVariants({ disabled, size }), className)}
      {...rest}
    >
      {src ? (
        <img src={src} className={avatarImage} />
      ) : (
        <HiUserCircle className={avatarImage} />
      )}
    </div>
  );
};

export default Avatar;
