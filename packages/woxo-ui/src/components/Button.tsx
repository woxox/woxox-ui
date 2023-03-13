import React, { useContext } from 'react';

import tw from 'twin.macro';
import { ThemeContext } from '../theme/ThemeProvider';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <button
      css={[
        tw`px-3 py-2`,
        tw`border-2 rounded-lg outline-none`,
        tw`border-zinc-200 hover:border-zinc-600`,
        tw`text-sm`,
        tw`bg-white hover:bg-white`,
        tw`transition-colors`,
        tw`appearance-none`,
        mode === 'dark' && tw`border-zinc-700 text-white bg-zinc-700 hover:bg-zinc-600`,
      ]}
      {...props}
    >
      {text}
    </button>
  );
};
