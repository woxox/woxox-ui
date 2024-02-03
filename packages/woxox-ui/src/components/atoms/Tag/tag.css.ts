import { recipe } from '@vanilla-extract/recipes';

import { baseToken } from '@/themes/theme.css';
import { COLOR_PALETTE } from '@/themes/tokens/color-palette';

export const tagVariants = recipe({
  base: {
    alignSelf: 'center',
    borderRadius: baseToken.radius.full,
    display: 'inline',
    ...baseToken.fontSize[12],
  },
  variants: {
    color: {
      default: {
        backgroundColor: COLOR_PALETTE.zinc700,
        color: COLOR_PALETTE.zinc300,
      },
      red: {
        backgroundColor: COLOR_PALETTE.red200,
        color: COLOR_PALETTE.red700,
      },
      green: {
        backgroundColor: COLOR_PALETTE.green200,
        color: COLOR_PALETTE.green700,
      },
      blue: {
        backgroundColor: COLOR_PALETTE.blue200,
        color: COLOR_PALETTE.blue700,
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
    size: 'md',
  },
});
