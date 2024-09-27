'use server';
import { fn } from '@storybook/test';
// import * as actual from './user';

// export * from './user';
export const getUser = fn(async () => {}).mockName('getUser');
export const getSignInUrl = fn(async () => {}).mockName('getSignInUrl');
export const signOut = fn(async () => {}).mockName('signOut');
export const getSignUpUrl = fn(async () => {}).mockName('getSignUpUrl');
// export const getUser = fn(actual.getUser).mockName('getUser');
// export const getSignInUrl = fn(actual.getSignInUrl).mockName('getSignInUrl');
// export const getSignUpUrl = fn(actual.getSignUpUrl).mockName('getSignUpUrl');
// export const signOut = fn(actual.signOut).mockName('signOut');
