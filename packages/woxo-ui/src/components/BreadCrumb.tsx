import React, { useCallback, useContext } from 'react';

import normalize from 'path-normalize';
import tw, { css } from 'twin.macro';

import { ArrowRightIcon } from '@woxo/icon';

import { ThemeContext } from '../theme/ThemeProvider';

// import ArrowRightIcon from './arrow-right.svg';
// import { join, normalize } from "path";
// import { ComponentBaseProps } from '@components/types';

export interface BreadCrumbPath {
  label: string;
  name?: string;
}

export interface BreadCrumbProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  paths: BreadCrumbPath[];
  onClick?: (path: string) => void;
}
export const BreadCrumb: React.FC<BreadCrumbProps> = ({ paths, onClick, ...props }) => {
  const { textColor } = useContext(ThemeContext);

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
              tw`rounded hover:bg-zinc-600 transition-colors`,
              tw`hover:text-white`,
              tw`cursor-pointer`,
              tw`whitespace-nowrap text-ellipsis overflow-hidden`,
              css`
                color: ${textColor};
              `,
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
