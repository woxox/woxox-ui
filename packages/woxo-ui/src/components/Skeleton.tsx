import React, { useMemo } from 'react';

import tw, { css } from 'twin.macro';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animation?: 'pulse' | 'none';
  text?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ animation, text, ...props }) => {
  const animationStyle = useMemo(() => {
    switch (animation) {
      case 'pulse':
        return [
          css`
            animation: pulse 1.5s cubic-bezier(0.4, 0.1, 0.1, 1) infinite;

            @keyframes pulse {
              0%,
              100% {
                ${tw`bg-zinc-100`}
              }
              50% {
                ${tw`bg-zinc-200`}
              }
            }

            @media (prefers-color-scheme: dark) {
              @keyframes pulse {
                0%,
                100% {
                  ${tw`bg-zinc-600`}
                }
                50% {
                  ${tw`bg-zinc-700`}
                }
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
      css={[
        tw`w-full h-4`,
        tw`rounded`,
        tw`bg-zinc-200 dark:bg-zinc-600`,
        text &&
          css`
            transform: scaleY(0.7);
          `,
        animationStyle,
      ]}
      {...props}
    />
  );
};
