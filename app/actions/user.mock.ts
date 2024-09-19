'use server';
import { fn } from '@storybook/test';
import * as actual from './user';

export * from './user';
export const getUser = fn(actual.getUser).mockName('getUser');
export const getSignInUrl = fn(actual.getSignInUrl).mockName('getSignInUrl');
export const signOut = fn(actual.signOut).mockName('signOut');
