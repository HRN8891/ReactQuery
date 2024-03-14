import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import {ICredentials} from 'utilities/types';

export function setSecureStorageItem(key: string, value: object) {
  if (!key || !value) {
    return Promise.reject('key-value pair is required');
  }
  return Keychain.setGenericPassword(key, JSON.stringify(value), {
    service: key,
  });
}

export function getSecureStorageItem(key: string) {
  if (!key) {
    return Promise.reject('key is required');
  }
  return Keychain.getGenericPassword({
    service: key,
  }).then((credentials: Keychain.UserCredentials | any | ICredentials) => {
    if (!credentials?.password) {
      return null;
    }
    return JSON.parse(credentials.password);
  });
}

export function removeSecureStorageItem(key: string) {
  return Keychain.resetGenericPassword({service: key});
}

export function setUnsecureStorageItem(key: string, value: object) {
  if (!key || !value) {
    return Promise.reject('key-value pair is required');
  }
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getUnsecureStorageItem(key: string): object {
  if (!key) {
    return Promise.reject('key is required');
  }
  return AsyncStorage.getItem(key).then(value => {
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  });
}

export function removeUnsecureStorageItem(key: string) {
  return AsyncStorage.removeItem(key);
}
export function removeMultipleUnsecureStorageItem(keys: string[]) {
  return AsyncStorage.multiRemove(keys);
}

export const storageKeys = {
  userData: 'userData',
};
