import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';

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
      outlined: {
        backgroundColor: 'transparent',
        borderColor: colorToken['border.input'],
        borderStyle: 'solid',
        borderWidth: baseToken.width['0.5'],
      },
      // underlined: {
      //   backgroundColor: 'transparent',
      //   borderBottomColor: colorToken['background.input'],
      //   borderRadius: `${baseToken.radius['0']} !important`,
      //   borderBottomStyle: 'solid',
      //   borderBottomWidth: baseToken.width['0.5'],
      // },
    },
    disabled: {
      false: {},
      true: {
        opacity: baseToken.opacity.disabled,
        cursor: 'not-allowed',
      },
    },
    size: {
      sm: {
        borderRadius: baseToken.radius.md,
        paddingBlock: baseToken.spacing['1'],
        paddingInline: baseToken.spacing['1.5'],
      },
      md: {
        borderRadius: baseToken.radius.md,
        paddingBlock: baseToken.spacing['2'],
        paddingInline: baseToken.spacing['2.5'],
      },
      lg: {
        borderRadius: baseToken.radius.md,
        paddingBlock: baseToken.spacing['2.5'],
        paddingInline: baseToken.spacing['4'],
      },
    },
  },
  defaultVariants: {
    variant: 'contained',
    disabled: false,
    size: 'md',
  },
});
