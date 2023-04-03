import React, { useMemo } from 'react';

import tw, { css } from 'twin.macro';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'pulse' | 'none';
  variant?: 'text' | 'circle' | 'square';
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animation, variant = 'square', ...props }, ref) => {
    const animationStyle = useMemo(() => {
      switch (animation) {
        case 'pulse':
          return [
            css`
              animation: pulse 2s cubic-bezier(0.4, 0.1, 0.1, 1) infinite;

              @keyframes pulse {
                0%,
                100% {
                  ${tw`bg-neutral-600`}
                }
                50% {
                  ${tw`bg-neutral-700`}
                }
              }
            `,
          ];
        default:
          return [];
      }
    }, [animation]);

    return (
      <div
        ref={ref}
        css={[
          tw`w-full h-4`,
          tw`rounded`,
          tw`bg-neutral-600`,
          variant === 'text' &&
            css`
              transform: scaleY(0.7);
            `,
          variant === 'circle' && tw`aspect-square rounded-full`,
          animationStyle,
        ]}
        {...props}
      />
    );
  },
);
