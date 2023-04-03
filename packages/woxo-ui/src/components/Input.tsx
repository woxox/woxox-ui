import React, { useContext } from 'react';

import tw, { css } from 'twin.macro';

import { ThemeContext } from '../theme/ThemeProvider';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: string;
}

export const Input: React.FC<InputProps> = ({ label, labelColor, ...props }) => {
  const { textColor } = useContext(ThemeContext);

  return (
    <div css={[tw`text-sm`]}>
      {label && (
        <div
          css={[
            tw`p-1`,
            tw`text-xs`,
            labelColor &&
              css`
                color: ${labelColor};
              `,
          ]}
        >
          {label}
        </div>
      )}
      <input
        css={[
          tw`appearance-none`,
          tw`px-3 py-1`,
          tw`border-2 rounded-lg outline-none`,
          tw`border-neutral-600 bg-neutral-700`,
          tw`focus:border-neutral-500`,
          tw`transition-colors`,
          css`
            color: ${textColor};
          `,
        ]}
        {...props}
      />
    </div>
  );
};
