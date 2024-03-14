import {StyleProp, TextStyle, ViewStyle, ImageStyle} from 'react-native';

export type ColorTheme = {
  PrimaryColor: string;
  SecondaryColor: string;
  BackgroundColor: string;
  PrimaryText: string;
  SecondaryText: string;
  BorderLine: string;
  InputBorderBottom: string;
  transparent: string;
  redColor: string;
  white: string;
  black1: string;
  black2: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  blue1: string;
  error: string;
  textColor: string;
};

export type TColors = ColorTheme;

export type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

export type ThemeMode = 'light' | 'dark';

export type TScaleMethods = {
  scale: (size: number) => number;
  scaleFont: (size: number) => number;
  scaleModerate: (size: number) => number;
  scaleVertical: (size: number) => number;
};

export type ThemeTypes = {
  colors: TColors;
  themeColorMode: ThemeMode;
  isDark: boolean;
  fonts: object;
  scaleMethods: TScaleMethods;
  style?: StyleProp<TextStyle | ViewStyle | ImageStyle | undefined | object | any>;
};
