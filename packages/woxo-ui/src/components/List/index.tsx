import React, { useMemo } from 'react';

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';

import { ListItemComponent } from './ListItem';

export interface ListItem {
  id: string;
  content: React.ReactElement;
}

interface ListProps extends HTMLMotionProps<'ul'> {
  listItem: ListItem[];
}

export const List: React.FC<ListProps> = ({ listItem, ...props }) => {
  const renderedList = useMemo(() => {
    return listItem.map(({ id, content }) => (
      <ListItemComponent layoutId={id} key={id}>
        {content}
      </ListItemComponent>
    ));
  }, [listItem]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.ul {...props}>{renderedList}</motion.ul>
    </AnimatePresence>
  );
};
