'use server';
import { fn } from '@storybook/test';

export const getUser = fn(async() => {}).mockName('getUser');
export const getSignInUrl = fn(async() => {}).mockName('getSignInUrl');
export const signOut = fn(async() => {}).mockName('signOut');
