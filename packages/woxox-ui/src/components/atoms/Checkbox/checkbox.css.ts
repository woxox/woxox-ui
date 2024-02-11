import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/themes/theme.css';
import { COLOR_PALETTE } from '@/themes/tokens/color-palette';

export const checkboxVariants = recipe({
  base: {
    display: 'inline-flex',
    boxSizing: 'border-box',
    padding: baseToken.spacing['0.5'],
    appearance: 'none',
    width: baseToken.width.fit,
    height: baseToken.height.fit,
    backgroundColor: 'transparent',
    border: `2px solid ${colorToken['border.checkbox']}`,
    borderRadius: baseToken.radius.sm,
    cursor: 'pointer',
    ...baseToken.transition.colors,
  },
  variants: {
    checked: {
      false: {
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: colorToken['background.checkbox.hover'],
          },
        },
      },
      true: {
        backgroundColor: colorToken['background.primary'],
      },
    },
    disabled: {
      false: {},
      true: {
        opacity: baseToken.opacity.disabled,
        cursor: 'not-allowed',
      },
    },
  },
});

export const checkboxIconStyle = style({
  fill: COLOR_PALETTE.white,
  width: baseToken.width['3'],
  height: baseToken.height['3'],
  visibility: 'hidden',
  selectors: {
    [`.${checkboxVariants.classNames.variants.checked.true} &`]: {
      visibility: 'visible',
    },
  },
});
