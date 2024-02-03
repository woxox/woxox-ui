import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { createWrapperAndAppendToBody } from './util';

export interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId?: string;
}

export const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = 'react-portal-wrapper',
}) => {
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    const elem = document.getElementById(wrapperId);

    if (!elem) {
      setElement(createWrapperAndAppendToBody(wrapperId));
    } else {
      setElement(elem);
    }
  }, [wrapperId]);

  if (element) return createPortal(children, element);
  return null;
};
