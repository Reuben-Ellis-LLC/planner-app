'use server';
import { fn } from '@storybook/test';

export const withAuth = fn(async () => ({})).mockName('withAuth');
export const getSignInUrl = fn(async () => '').mockName('getSignInUrl');
export const signOut = fn(async () => {}).mockName('signOut');
export const getSignUpUrl = fn(async () => {}).mockName('getSignUpUrl');
