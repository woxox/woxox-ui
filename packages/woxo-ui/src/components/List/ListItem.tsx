import React from 'react';

import { motion, HTMLMotionProps } from 'framer-motion';

interface ListItemProps extends HTMLMotionProps<'li'> {}

export const ListItemComponent: React.FC<ListItemProps> = (props) => {
  return <motion.li initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} {...props} />;
};
