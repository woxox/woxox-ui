import React, { useContext, useMemo, useState } from 'react';

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import tw, { css } from 'twin.macro';

import { ThemeContext } from '../theme/ThemeProvider';

interface TooltipProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    Pick<React.HTMLAttributes<HTMLDivElement>, 'children'> {}

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const { textColor } = useContext(ThemeContext);
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      css={[tw`relative`]}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            css={[
              tw`absolute`,
              tw`px-2 py-1`,
              tw`bg-neutral-900 text-white rounded-lg`,
              css`
                color: ${textColor};
              `,
              hover && tw`visible`,
            ]}
            transition={{ type: 'spring', duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          >
            tooltip
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
