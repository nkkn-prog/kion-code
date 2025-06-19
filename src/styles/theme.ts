import { createTheme, MantineColorsTuple } from '@mantine/core';

const sunsetOrange: MantineColorsTuple = [
  '#fff1e6',
  '#ffe0cc',
  '#ffbf99',
  '#ff9b66',
  '#ff7043',
  '#ff5722',
  '#f44336',
  '#e53935',
  '#d32f2f',
  '#c62828'
];

const amberGlow: MantineColorsTuple = [
  '#fffbf0',
  '#fff5d9',
  '#ffe7a3',
  '#ffd76d',
  '#ffc85c',
  '#ffb74d',
  '#ffa726',
  '#ff9800',
  '#fb8c00',
  '#f57c00'
];

export const theme = createTheme({
  colors: {
    sunsetOrange,
    amberGlow,
  },
  primaryColor: 'sunsetOrange',
  white: '#FFFFFF',
  black: '#000000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
      styles: {
        root: {
          transition: 'all 0.2s ease',
        },
      },
    },
  },
});