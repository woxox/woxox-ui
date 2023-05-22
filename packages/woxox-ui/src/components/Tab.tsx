import React, { useContext, useMemo, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import tw from 'twin.macro';

import { css } from '@emotion/react';

import { ThemeContext } from '../theme/ThemeProvider';

export interface TabType {
  title: string;
  content: React.ReactElement;
}

export interface TabProps {
  tabs: TabType[];
  fallback?: React.ReactElement;
  underline?: boolean;
  cursorSweep?: boolean;
}

export const Tab: React.FC<TabProps> = ({
  tabs,
  fallback = <span>not selected</span>,
  underline = true,
  cursorSweep = true,
}) => {
  const { textColor } = useContext(ThemeContext);

  const [selectedIndex, setSelectedIndex] = useState<number>();

  const renderedTitles = useMemo(() => {
    return tabs.map((tab, idx) => {
      const selected = selectedIndex === idx;

      return (
        <div css={[tw`relative`]} onClick={() => setSelectedIndex(idx)} key={tab.title}>
          <div
            css={[
              tw`px-4 py-1.5`,
              tw`select-none cursor-pointer`,
              underline && tw`border-b border-b-neutral-600`,
            ]}
          >
            {tab.title}
          </div>
          {selected && cursorSweep && (
            <motion.div
              css={[
                tw`absolute top-0 left-0 bottom-0 right-0 -z-10`,
                tw`rounded-md`,
                underline && tw`rounded-b-none`,
                selected && tw`bg-neutral-700`,
              ]}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
              layoutId="cursor"
            />
          )}
          {selected && underline && (
            <motion.div
              css={[tw`relative -top-[1px]`, tw`h-[1px] bg-neutral-400 z-10`]}
              layoutId="underline"
            />
          )}
        </div>
      );
    });
  }, [cursorSweep, selectedIndex, tabs, underline]);

  const renderedContent = useMemo(() => {
    if (selectedIndex === undefined || !tabs[selectedIndex]) return fallback;
    return tabs[selectedIndex].content;
  }, [fallback, selectedIndex, tabs]);

  return (
    <div
      css={[
        css`
          color: ${textColor};
        `,
      ]}
    >
      <div css={[tw`flex`]}>{renderedTitles}</div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.1 }}
          key={selectedIndex ?? 'empty'}
        >
          {renderedContent}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
