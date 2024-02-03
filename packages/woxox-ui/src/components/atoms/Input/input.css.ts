import { recipe } from '@vanilla-extract/recipes';

export const inputVariants = recipe({
  base: {},
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
