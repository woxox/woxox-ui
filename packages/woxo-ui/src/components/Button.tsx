import React, { useContext } from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';
import tw, { css } from 'twin.macro';

import { ThemeContext } from '../theme/ThemeProvider';

export interface ButtonProps extends HTMLMotionProps<'button'> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { textColor } = useContext(ThemeContext);

  return (
    <motion.button
      css={[
        tw`px-3 py-2`,
        tw`border-2 rounded-lg outline-none`,
        tw`border-neutral-200 hover:border-neutral-600`,
        tw`text-sm`,
        tw`bg-white hover:bg-white`,
        tw`transition-colors`,
        tw`appearance-none`,
        tw`text-neutral-900`,
        tw`border-neutral-700 bg-neutral-700 hover:bg-neutral-600`,
        css`
          color: ${textColor};
        `,
      ]}
      // whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
