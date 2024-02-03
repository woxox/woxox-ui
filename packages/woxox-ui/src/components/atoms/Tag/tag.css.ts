import {
  assignVars,
  createThemeContract,
} from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';
import { COLOR_PALETTE } from '@/themes/tokens/color-palette';

const tagVars = createThemeContract({
  border: null,
  background: null,
  text: null,
});

export const tagVariants = recipe({
  base: {
    alignSelf: 'center',
    appearance: 'none',
    borderWidth: baseToken.spacing['0.5'],
    borderStyle: 'solid',
    borderColor: tagVars.border,
    backgroundColor: tagVars.background,
    color: tagVars.text,
    borderRadius: baseToken.radius.full,
    display: 'inline',
    ...baseToken.fontSize[12],
  },
  variants: {
    variant: {
      contained: {},
      // contained: {
      //   backgroundColor: colorToken['background.primary'],
      //   color: colorToken['text.tag.contained'],
      // },
      outlined: {
        backgroundColor: 'transparent',
        color: tagVars.border,
        // border: `2px solid ${colorToken['background.primary']}`,
        // color: colorToken['text.tag.outlined'],
      },
    },
    color: {
      default: {
        vars: assignVars(tagVars, {
          border: colorToken['background.primary'],
          background: colorToken['background.primary'],
          text: colorToken['text.primary'],
        }),
      },
      red: {
        vars: assignVars(tagVars, {
          border: COLOR_PALETTE.red500,
          background: COLOR_PALETTE.red500,
          text: COLOR_PALETTE.red800,
        }),
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
    color: 'default',
    variant: 'contained',
    size: 'md',
  },
});
