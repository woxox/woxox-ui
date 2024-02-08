import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';

export const inputOuterVariants = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: baseToken.spacing['0.5'],
  },
  variants: {
    variant: {
      contained: {},
      outlined: {},
      underlined: {},
    },
    disabled: {
      false: {},
      true: {
        opacity: baseToken.opacity.disabled,
        cursor: 'not-allowed',
      },
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    variant: 'contained',
    disabled: false,
    size: 'md',
  },
});

export const inputInnerStyle = style({
  backgroundColor: colorToken['background.input'],
  border: 'none',
  color: colorToken['text.primary'],
  outline: 'none',
  selectors: {
    [`.${inputOuterVariants.classNames.variants.variant.outlined} > &`]:
      {
        backgroundColor: 'transparent',
        borderColor: colorToken['border.input'],
        borderStyle: 'solid',
        borderWidth: baseToken.width['0.5'],
      },
    [`.${inputOuterVariants.classNames.variants.variant.underlined} > &`]:
      {
        backgroundColor: 'transparent',
        borderBottomColor: colorToken['border.input'],
        borderRadius: `${baseToken.radius['0']} !important`,
        borderBottomStyle: 'solid',
        borderBottomWidth: baseToken.width['0.5'],
      },
    [`.${inputOuterVariants.classNames.variants.size.sm} > &`]: {
      borderRadius: baseToken.radius.md,
      paddingBlock: baseToken.spacing['1'],
      paddingInline: baseToken.spacing['1.5'],
    },
    [`.${inputOuterVariants.classNames.variants.size.md} > &`]: {
      borderRadius: baseToken.radius.md,
      paddingBlock: baseToken.spacing['2'],
      paddingInline: baseToken.spacing['2.5'],
    },
    [`.${inputOuterVariants.classNames.variants.size.lg} > &`]: {
      borderRadius: baseToken.radius.md,
      paddingBlock: baseToken.spacing['2.5'],
      paddingInline: baseToken.spacing['4'],
    },
  },
});
