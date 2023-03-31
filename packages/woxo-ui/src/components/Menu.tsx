import React, { useCallback, useContext, useMemo, useState } from 'react';

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import tw, { css } from 'twin.macro';

import { ThemeContext } from '../theme/ThemeProvider';
import { Button } from './Button';

interface MenuProps extends Omit<HTMLMotionProps<'div'>, 'children' | 'onChange'> {
  menuItems: MenuItem[];
  onChange?: (item?: MenuItem) => void;
}

export interface MenuItem {
  id: number;
  label: string;
  value: any;
}

export const Menu: React.FC<MenuProps> = ({ menuItems, onChange }) => {
  const { textColor } = useContext(ThemeContext);

  const [selected, setSelected] = useState<MenuItem>();
  const [opened, setOpen] = useState<boolean>(false);

  const handleClickMenuItem = useCallback(
    (item: MenuItem) => {
      if (item.id === selected?.id) {
        setSelected(undefined);
        onChange?.(undefined);
      } else {
        setSelected(item);
        onChange?.(item);
      }
    },
    [onChange, selected?.id],
  );

  const items = useMemo(() => {
    return menuItems.map((item) => {
      return (
        <motion.li
          key={item.id}
          //   onMouseEnter={() => setCursor(item.id)}
          css={[tw`relative cursor-pointer`]}
          variants={{
            open: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 300, damping: 24 },
            },
            closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
          }}
          onClick={() => handleClickMenuItem(item)}
        >
          <div css={[tw`relative z-20`, tw`px-4 py-1`]}>{item.label}</div>
          <AnimatePresence mode="wait">
            {selected?.id === item.id && (
              <motion.div
                css={[tw`absolute top-0 left-0 right-0 bottom-0 z-10`, tw`bg-neutral-600`]}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId="menu_list_cursor"
              />
            )}
          </AnimatePresence>
        </motion.li>
      );
    });
  }, [handleClickMenuItem, menuItems, selected]);

  return (
    <div css={[tw`relative inline-block`]}>
      <Button onClick={() => setOpen(!opened)} css={[tw`flex justify-between min-w-[8.5rem]`]}>
        {selected ? selected.label : 'Not Selected'}
        <motion.div
          css={[tw`mx-0 my-auto`]}
          variants={{ open: { rotate: -180 }, closed: { rotate: 0 } }}
          transition={{ duration: 0.2 }}
          animate={opened ? 'open' : 'closed'}
        >
          <svg fill={textColor} width="0.8rem" height="0.8rem" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </Button>
      <AnimatePresence>
        {opened && (
          <motion.ul
            // onMouseLeave={() => setCursor(undefined)}
            css={[
              tw`absolute my-1 min-w-full`,
              tw`bg-neutral-800 overflow-hidden rounded select-none`,
              css`
                color: ${textColor};
              `,
            ]}
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                transition: {
                  delayChildren: 0.15,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.15,
                },
              },
            }}
            animate={opened ? 'open' : 'closed'}
            initial="closed"
            exit="closed"
          >
            {items}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
