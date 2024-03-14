import {StyleSheet} from 'react-native';

import {ThemeTypes} from 'theme/types';

const style = ({colors: {black1, white}, scaleMethods: {scale}}: ThemeTypes) =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: black1,
      borderRadius: scale(100),
      justifyContent: 'center',
      paddingTop: scale(20),
      paddingBottom: scale(20),
      width: scale(200),
    },
    buttonTextStyle: {
      color: white,
      fontSize: scale(16),
      alignSelf: 'center',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scale(20),
    },
    disabled: {
      opacity: 0.4,
    },
  });
export default style;
