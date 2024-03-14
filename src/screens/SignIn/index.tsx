import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import injectStyled from 'theme/InjectStyled';
import CTextBox from 'components/CTextBox';
import CButton from 'components/CButton';
import CLabel from 'components/CLabel';
import KeyboardWrapperView from 'components/KeyboardWrapperView';
import config from 'constants/config';
import {strings} from 'locales/i18n';
import {SCREEN_NAMES} from 'navigation/constants';
import {SignInScreenProps} from 'navigation/types';
import Styles, {StyleProps} from './style';
import {useGetUserQuery} from 'queries/user';

type SignInProps = {
  navigation: SignInScreenProps['navigation'];
  style: StyleProps;
};

const SignIn: React.FC<SignInProps> = ({navigation, style}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useGetUserQuery();

  console.log('userData', userData);

  const handleSignIn = () => {};

  const onSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SignUp);
  };

  return (
    <KeyboardWrapperView header isScrollViewEnable={true}>
      <CLabel style={style.bottomLabelStyle}>{`API_BASE_URL: ${config.API_BASE_URL || ''}`}</CLabel>
      <View style={style.all}>
        <CTextBox
          placeholder={strings('signIn.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CTextBox
          placeholder={strings('signIn.password')}
          value={password}
          onChangeText={setPassword}
          hidePassword={true}
          returnKeyType={'done'}
        />
        <CButton onPress={handleSignIn} text={strings('signIn.signIn')} />
      </View>
      <View style={style.footer}>
        <CLabel style={style.bottomLabelStyle}>{strings('signIn.bottomText')}</CLabel>
        <TouchableOpacity style={style.buttonContainer} onPress={onSignUpPress}>
          <CLabel style={style.signUpText}>{strings('signIn.bottomText2')}</CLabel>
        </TouchableOpacity>
      </View>
    </KeyboardWrapperView>
  );
};

export default injectStyled(Styles)(SignIn);
