import React from "react";

import tw, { GlobalStyles } from "twin.macro";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <>
      <GlobalStyles />
      <button
        css={[
          tw`px-3 py-2`,
          tw`border-2 rounded-lg outline-none`,
          tw`border-zinc-200 hover:border-zinc-600 dark:border-zinc-700`,
          tw`text-sm dark:text-white`,
          tw`bg-white hover:bg-white dark:bg-zinc-700 dark:hover:bg-zinc-600`,
          tw`transition-colors`,
          tw`appearance-none`,
        ]}
        {...props}
      >
        {text}
      </button>
    </>
  );
};
