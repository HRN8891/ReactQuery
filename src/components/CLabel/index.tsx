import React from 'react';
import {Text, TextProps} from 'react-native';
import {setTestIdentifier} from '../../utilities/misc';

interface ICLabel extends TextProps {}

function CLabel({children, style, testID}: ICLabel) {
  return (
    <Text {...setTestIdentifier(testID)} style={style}>
      {children}
    </Text>
  );
}

export default CLabel;
