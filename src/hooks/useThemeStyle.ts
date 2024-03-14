import {useMemo} from 'react';
import {useThemeScheme} from 'theme/ThemeProvider';
import {ThemeTypes} from 'theme/types';

const useThemeStyle = (styleCallback: Function): ThemeTypes => {
  const pathTheme = useThemeScheme();
  return useMemo(() => {
    return {
      ...pathTheme,
      style: styleCallback(pathTheme),
    };
  }, [pathTheme, styleCallback]);
};

export default useThemeStyle;
