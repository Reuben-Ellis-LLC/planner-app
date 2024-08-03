'use server';
import { fn } from '@storybook/test';
import { getUser as getUserDefault } from '@workos-inc/authkit-nextjs';
import * as actual from './user';

export * from './user';
export const getUser = fn(getUserDefault).mockName('getUser');
export const fetchUser = fn(actual.fetchUser).mockName('fetchUser');
export const getUserWorkOS = fn(actual.getUserWorkOS).mockName('getUserWorkOS');
