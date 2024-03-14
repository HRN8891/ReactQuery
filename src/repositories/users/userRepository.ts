import apiClient from '../apiClient';
import {postLoginParam, postRegisterParam, putUserParam} from './userRepository.param';

export const postLogin = async ({email, password}: postLoginParam) => {
  return await apiClient({
    method: 'post',
    url: '/users/login',
    data: {
      user: {
        email,
        password,
      },
    },
  });
};

export const postRegister = async ({username}: postRegisterParam) => {
  return await apiClient({
    method: 'post',
    url: '/users',
    data: {
      name: username,
      job: 'leader',
    },
  });
};

export const getUser = async () => {
  return await apiClient({
    method: 'get',
    url: 'users?page=2',
  });
};

export const putUser = async (data: {user: putUserParam}) => {
  return await apiClient({
    method: 'put',
    url: '/user',
    data,
  });
};
