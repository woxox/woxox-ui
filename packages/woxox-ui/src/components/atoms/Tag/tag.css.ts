import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';

export const tagVariants = recipe({
  base: {
    alignSelf: 'center',
    appearance: 'none',
    backgroundColor: colorToken['background.primary'],
    border: 'none',
    borderRadius: baseToken.radius.full,
    color: colorToken['text.primary'],
    display: 'inline',
  },
  variants: {
    variant: {
      contained: {
        backgroundColor: colorToken['background.primary'],
        color: colorToken['text.primary'],
      },
      outlined: {
        backgroundColor: 'transparent',
        border: `2px solid ${colorToken['background.primary']}`,
      },
    },
    size: {
      sm: {
        paddingBlock: baseToken.spacing['1'],
        paddingInline: baseToken.spacing['1.5'],
      },
      md: {
        paddingBlock: baseToken.spacing['2'],
        paddingInline: baseToken.spacing['2.5'],
      },
      lg: {
        paddingBlock: baseToken.spacing['2.5'],
        paddingInline: baseToken.spacing['4'],
      },
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
});
