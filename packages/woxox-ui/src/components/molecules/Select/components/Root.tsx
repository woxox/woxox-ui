import { useEffect } from 'react';

import Popover from '../../Popover';
import { PopoverProviderProps } from '../../Popover/context';
import {
  SelectContextProvider,
  SelectContextProviderProps,
} from '../context';

export interface RootProps
  extends SelectContextProviderProps,
    PopoverProviderProps {}

const Root = ({ children, open, anchorEl, ...rest }: RootProps) => {
  return (
    <Popover.Root open={open} anchorEl={anchorEl}>
      <SelectContextProvider {...rest}>
        {children}
      </SelectContextProvider>
    </Popover.Root>
  );
};

export default Root;
