import React from 'react';

import clsx from 'clsx';

import { usePopoverContext } from '../context';
import { popoverTriggerStyle } from '../popover.css';

export interface PopoverTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Trigger: React.FC<PopoverTriggerProps> = ({
  className,
  ...rest
}) => {
  const { setAnchorEl, handleOpen } = usePopoverContext();

  return (
    <div
      ref={(ref) => setAnchorEl(ref)}
      onClick={handleOpen}
      className={clsx(popoverTriggerStyle, className)}
      {...rest}
    />
  );
};
