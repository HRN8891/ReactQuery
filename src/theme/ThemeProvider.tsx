import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {Appearance} from 'react-native';
import {setUnsecureStorageItem, getUnsecureStorageItem} from 'utilities/storageUtils';
import {themeConstant} from 'constants/appConstant';
import {colorScheme} from './colors';
import {scale, scaleFont, scaleModerate, scaleVertical} from './scale';
import Fonts from './fonts';
import {ThemeTypes, ThemeMode} from './types';

const systemColorScheme = Appearance.getColorScheme() ?? 'light';

export const themeType = {
  light: 'light',
  dark: 'dark',
  default: 'default',
};

export const getColorScheme = (themeColorMode: ThemeMode): ThemeTypes => ({
  colors: colorScheme[themeColorMode],
  scaleMethods: {scale, scaleFont, scaleModerate, scaleVertical},
  fonts: Fonts,
  isDark: themeColorMode === themeType.dark,
  themeColorMode,
});

const ThemeContext = createContext(getColorScheme(systemColorScheme));

export const useThemeScheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}: {children: React.ReactElement}) => {
  const themeListener = useRef<any>(null);
  const [themeColorMode, setThemeColorMode] = useState<ThemeMode>(systemColorScheme);
  const [currentThemeType, setCurrentThemeType] = useState(themeType.default);

  const changeColorTheme = useCallback((value: ThemeMode): void => {
    setThemeColorMode(value === themeType.default ? Appearance.getColorScheme() ?? 'light' : value);
    setCurrentThemeType(value);
    setUnsecureStorageItem(themeConstant.theme, value);
  }, []);

  useEffect(() => {
    const getColorTheme = async () => {
      const currentThemeMode =
        (await getUnsecureStorageItem(themeConstant.theme)) ?? themeType.default;
      setThemeColorMode(
        currentThemeMode === themeType.default ? Appearance.getColorScheme() : currentThemeMode,
      );
      setCurrentThemeType(currentThemeMode);
      themeListener.current = Appearance.addChangeListener((theme: any) => {
        setCurrentThemeType(currentState => {
          if (currentState === themeType.default) {
            setThemeColorMode(theme.colorScheme);
          }
          return currentState;
        });
      });
    };
    getColorTheme();
    return themeListener.current?.remove;
  }, []);

  const theme = useMemo(
    () => ({
      ...getColorScheme(themeColorMode),
      onChangeColorScheme: changeColorTheme,
      currentThemeMode: currentThemeType,
    }),
    [themeColorMode, changeColorTheme, currentThemeType],
  );

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
