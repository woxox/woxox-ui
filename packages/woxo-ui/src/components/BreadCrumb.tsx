import React, { useCallback } from 'react';

import normalize from 'path-normalize';
import tw from 'twin.macro';
// import ArrowRightIcon from './arrow-right.svg';
// import { join, normalize } from "path";
// import { ComponentBaseProps } from '@components/types';

export interface BreadCrumbPath {
  label: string;
  name?: string;
}

export interface BreadCrumbProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  paths: BreadCrumbPath[];
  href?: boolean;
  onClick?: (path: string) => void;
}

const ArrowRightIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" {...props}>
      <path
        d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
        transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
        fill="inherit"
      />
    </svg>
  );
};

export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  paths,
  href = false,
  onClick,
  ...props
}) => {
  const handleNodeClick = useCallback(
    (index: number) => {
      if (onClick) {
        const resultPath = normalize(
          paths
            .slice(0, index + 1)
            .flatMap(({ label, name }) => name ?? label)
            .join('/'),
        );

        onClick(resultPath);
      }
    },
    [onClick, paths],
  );

  return (
    <div css={[tw`flex overflow-hidden`, tw`p-3`, tw`text-xs`]} {...props}>
      {paths.map((path, idx, arr) => (
        <React.Fragment key={path.label}>
          <span
            css={[
              tw`block`,
              tw`px-1.5 py-1`,
              tw`rounded hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors`,
              tw`hover:text-white`,
              tw`cursor-pointer`,
              tw`whitespace-nowrap text-ellipsis overflow-hidden`,
            ]}
            onClick={() => handleNodeClick(idx)}
          >
            {path.label}
          </span>
          {arr[idx + 1] && (
            <ArrowRightIcon
              css={[
                tw`flex-shrink-0`,
                tw`w-3`,
                tw`mx-0.5 my-auto`,
                tw`fill-zinc-500 dark:fill-zinc-400`,
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
