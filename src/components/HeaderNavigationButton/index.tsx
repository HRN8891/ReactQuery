import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {HeaderBackButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';

import {goBack} from 'navigation/root';
import {ArrowRightIcon} from 'assets/Icons';
import {useThemeStyle} from 'hooks';

import styles from './style';

type IHeaderNavigationButton = {
  left?: boolean;
} & HeaderBackButtonProps;

export default function HeaderNavigationButton({left = true}: IHeaderNavigationButton) {
  const {
    style,
    colors: {black1},
    scaleMethods: {scale},
  } = useThemeStyle(styles);

  const handleBackPress = useCallback(() => {
    goBack();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleBackPress} style={style.container}>
      {left && (
        <ArrowRightIcon height={scale(24)} width={scale(24)} fill={black1} style={style.iconLeft} />
      )}
      {!left && (
        <ArrowRightIcon
          height={scale(24)}
          width={scale(24)}
          fill={black1}
          style={style.iconRight}
        />
      )}
    </TouchableOpacity>
  );
}
