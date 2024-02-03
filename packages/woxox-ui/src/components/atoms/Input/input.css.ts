import { recipe } from '@vanilla-extract/recipes';

import { colorToken } from '@/themes/theme.css';

export const inputVariants = recipe({
  base: {
    backgroundColor: colorToken['background.input'],
    border: 'none',
    color: colorToken['text.primary'],
    outline: 'none',
  },
  variants: {
    variant: {
      contained: {},
      outlined: {},
    },
  },
  defaultVariants: {
    variant: 'contained',
  },
});
