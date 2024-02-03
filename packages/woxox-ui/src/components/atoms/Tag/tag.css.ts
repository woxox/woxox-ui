import { createThemeContract } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';

export const tagVars = createThemeContract({
  backgroundColor: null,
  borderColor: null,
});

export const tagVariants = recipe({
  base: {
    alignSelf: 'center',
    appearance: 'none',
    borderStyle: 'solid',
    borderWidth: baseToken.spacing['0.5'],
    borderColor: tagVars.borderColor,
    borderRadius: baseToken.radius.full,
    display: 'inline',
    ...baseToken.fontSize[12],
  },
  variants: {
    variant: {
      contained: {
        backgroundColor: colorToken['background.primary'],
        color: colorToken['text.tag.contained'],
      },
      outlined: {
        backgroundColor: 'transparent',
        color: colorToken['text.tag.outlined'],
      },
    },
    color: {
      red: {
        backgroundColor: colorToken['background.tag.red'],
      },
    },
    size: {
      sm: {
        paddingBlock: baseToken.spacing['0.5'],
        paddingInline: baseToken.spacing['1.5'],
      },
      md: {
        paddingBlock: baseToken.spacing['1'],
        paddingInline: baseToken.spacing['2.5'],
      },
      lg: {
        paddingBlock: baseToken.spacing['1.5'],
        paddingInline: baseToken.spacing['3.5'],
      },
    },
  },
  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },
});
