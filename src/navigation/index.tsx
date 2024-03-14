import React, {useEffect} from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';

import {Dashboard, Settings, SignIn, SignUp} from 'screens';
import {SCREEN_NAMES} from './constants';
// import {useAppDispatch, useAppSelector} from '../store';
// import {saveUserDetails} from '../store/auth/slice';
import {getSecureStorageItem, storageKeys} from '../utilities/storageUtils';
import {AuthStackParamList, HomeStackParamList} from './types';
import {IUserApiResponse} from 'store/types';
import {leftToRightAnimation} from './stackAnimation';

const HomeStack = createStackNavigator<HomeStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const noOptions: StackNavigationOptions = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Screen name={SCREEN_NAMES.SignIn} component={SignIn} options={noOptions} />
      <AuthStack.Screen name={SCREEN_NAMES.SignUp} component={SignUp} options={noOptions} />
    </AuthStack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={SCREEN_NAMES.Dashboard} component={Dashboard} options={noOptions} />
      <HomeStack.Screen
        name={SCREEN_NAMES.Setting}
        component={Settings}
        options={leftToRightAnimation}
      />
    </HomeStack.Navigator>
  );
}

function MainNavigator() {
  // const userData = useAppSelector(state => state.auth.userData);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    getSecureStorageItem(storageKeys.userData)
      .then((localUserData: IUserApiResponse) => {
        if (localUserData) {
          // dispatch(saveUserDetails(localUserData));
        }
      })
      .catch(() => {});
  }, []);

  return <AuthNavigator />;
}

export default MainNavigator;
