import React, {useState} from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import injectStyled from 'theme/InjectStyled';
import {strings} from 'locales/i18n';
import CTextBox from 'components/CTextBox';
import CButton from 'components/CButton';
import {validateEmail} from 'utilities/misc';
import {goBack} from 'navigation/root';
import {SignUpScreenProps} from 'navigation/types';

import Styles, {StyleProps} from './style';
import {usePutUserMutation} from 'queries/user';

const {alert} = Alert;

type SignUpProps = {
  navigation: SignUpScreenProps['navigation'];
  style: StyleProps;
};

const SignUp: React.FC<SignUpProps> = ({style}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const usePutUser = usePutUserMutation();

  const handleSignUp = () => {
    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      const trimmedConfirmPassword = confirmPassword.trim();

      if (!trimmedEmail) {
        return alert('Email is required');
      }
      if (!validateEmail(trimmedEmail)) {
        return alert('Please enter valid Email');
      }
      if (!trimmedPassword) {
        return alert('Password is required');
      }
      if (!trimmedConfirmPassword) {
        return alert('Confirm Password is required');
      }
      if (trimmedPassword !== trimmedConfirmPassword) {
        return alert('Password & Confirm Password do not match');
      }

      usePutUser.mutate(
        {username: trimmedEmail, email: trimmedEmail, password: trimmedPassword},
        {
          onSuccess: res => {
            console.log('res', res);
          },
        },
      );
    } catch (error) {
      alert(strings('common.something_went_wrong'));
    }
  };

  return (
    <SafeAreaView style={style.screen}>
      <TouchableOpacity onPress={goBack}>{/* Add back button icon here */}</TouchableOpacity>
      <KeyboardAwareScrollView
        contentContainerStyle={style.all}
        keyboardShouldPersistTaps={'handled'}>
        <CTextBox
          placeholder={strings('signUp.email')}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CTextBox
          placeholder={strings('signUp.password')}
          value={password}
          onChangeText={setPassword}
          hidePassword={true}
        />
        <CTextBox
          placeholder={strings('signUp.confirmPassword')}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          hidePassword={true}
          returnKeyType={'done'}
        />
        <CButton onPress={handleSignUp} text={strings('signUp.signUp')} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default injectStyled(Styles)(SignUp);
