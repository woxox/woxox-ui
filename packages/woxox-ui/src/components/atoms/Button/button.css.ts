import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';

export const buttonVariants = recipe({
  base: {
    appearance: 'none',
    border: 'none',
    background: colorToken['background.primary'],
    color: colorToken['text.button.primary'],
    borderRadius: baseToken.radius.md,
    paddingBlock: baseToken.spacing['1.5'],
    paddingInline: baseToken.spacing['2'],
    cursor: 'pointer',
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: colorToken['background.primary.hover'],
      },
    },
    ...baseToken.transition.colors,
  },
  variants: {
    disabled: {
      false: {},
      true: {
        opacity: baseToken.opacity.disabled,
        cursor: 'not-allowed',
      },
    },
  },
});
