import React from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';
import tw from 'twin.macro';

interface TooltipProps extends HTMLMotionProps<'div'> {
  show?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <>
      {children}
      <motion.div css={[tw`absolute`]} {...props}>
        tooltip
      </motion.div>
    </>
  );
};
