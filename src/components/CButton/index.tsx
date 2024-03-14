import React from 'react';
import {View, Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';

import {useThemeStyle} from 'hooks';

import Style from './style';

interface ICButton {
  textStyle?: TextStyle;
  buttonContainerStyle?: ViewStyle;
  onPress: () => any;
  text: string;
  disabled?: boolean;
}

function CButton({textStyle, buttonContainerStyle, onPress, text, disabled}: ICButton) {
  const {style} = useThemeStyle(Style);
  return (
    <View style={[style.buttonContainerStyle, buttonContainerStyle]}>
      <TouchableOpacity style={style.buttonStyle} onPress={onPress} disabled={disabled}>
        <Text style={[style.buttonTextStyle, textStyle]}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CButton;
