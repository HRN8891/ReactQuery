/* eslint-disable @typescript-eslint/no-unsafe-return */
import {QUERY_USER_KEY} from '../constants/queryName';
import {getUser, postRegister} from '../repositories/users/userRepository';
import {useMutation, useQuery} from '@tanstack/react-query';

export const useGetUserQuery = () =>
  useQuery({
    queryKey: [QUERY_USER_KEY],
    queryFn: () => getUser().then(res => res.data),
    staleTime: 20000,
  });

export const usePutUserMutation = () =>
  useMutation({
    mutationFn: postRegister,
  });
