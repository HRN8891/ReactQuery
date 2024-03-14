import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';

import {useThemeScheme} from 'theme/ThemeProvider';

const injectStyled = (Styles: Function) => (Component: React.FC<any>) => (props: object) => {
  const appTheme = useThemeScheme();

  const theme = useMemo(() => {
    return {style: StyleSheet.create({...Styles(appTheme)}), ...appTheme};
  }, [appTheme]);

  return <Component {...theme} {...props} />;
};

export default injectStyled;
