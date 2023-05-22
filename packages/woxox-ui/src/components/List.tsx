import React, { useMemo } from 'react';

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import tw from 'twin.macro';

export interface ListItem {
  id: string;
  content: React.ReactElement;
}

interface ListProps extends Omit<HTMLMotionProps<'ul'>, 'onClick'> {
  listItem: ListItem[];
  onClick?: (id: string) => void;
}

export const List: React.FC<ListProps> = ({ onClick, listItem, ...props }) => {
  const renderedList = useMemo(() => {
    return listItem.map(({ id, content }) => (
      <motion.li
        layout
        transition={{ duration: 0.5, type: 'spring' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={() => onClick?.(id)}
        key={id}
      >
        {content}
      </motion.li>
    ));
  }, [listItem, onClick]);

  return (
    <motion.ul css={[tw`flex flex-col gap-2`]} {...props}>
      <AnimatePresence mode="popLayout">{renderedList}</AnimatePresence>
    </motion.ul>
  );
};
