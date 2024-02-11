import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken } from '@/themes/theme.css';
import { COLOR_PALETTE } from '@/themes/tokens/color-palette';

export const avatarVariants = recipe({
  base: {
    borderRadius: baseToken.radius.full,
    overflow: 'hidden',
  },
  variants: {
    disabled: {
      false: {},
      true: {
        cursor: 'not-allowed',
        opacity: baseToken.opacity.disabled,
      },
    },
    size: {
      sm: {
        width: baseToken.width[8],
        height: baseToken.width[8],
      },
      md: {
        width: baseToken.width[10],
        height: baseToken.width[10],
      },
      lg: {
        width: baseToken.width[12],
        height: baseToken.width[12],
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const avatarImage = style({
  width: baseToken.width.full,
  height: baseToken.height.full,
  fill: COLOR_PALETTE.zinc500,
});
