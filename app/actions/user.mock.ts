'use server';
import { fn } from '@storybook/test';
// import * as actual from './user';

// export * from './user';
const user = {
  user: {
    sessionId: 'user_01HZYKPB4JWFPAADBPGHVRK5TY',
    accessToken: 'access_01HZYKPB4JWFPAADBPGHVRK5TY',
    user: {
      object: 'user',
      id: 'user_01J808XJ81KB2NDT9F4KWDYR9Z',
      email: 'ethriel3695@gmail.com',
      emailVerified: true,
      firstName: 'Reuben',
      profilePictureUrl:
        'https://workoscdn.com/images/v1/8STSQXZTLQob5euEiQbp1Oe1jttiuZtMiaWqYKCS2EU',
      lastName: 'Ellis',
      createdAt: '2024-06-09T13:41:04.750Z',
      updatedAt: '2024-06-09T13:41:04.750Z',
    },
  },
};
export const getUser = fn(async () => user.user).mockName('getUser');
export const getSignInUrl = fn(async () => {}).mockName('getSignInUrl');
export const signOut = fn(async () => {}).mockName('signOut');
export const getSignUpUrl = fn(async () => {}).mockName('getSignUpUrl');
// export const getUser = fn(actual.getUser).mockName('getUser');
// export const getSignInUrl = fn(actual.getSignInUrl).mockName('getSignInUrl');
// export const getSignUpUrl = fn(actual.getSignUpUrl).mockName('getSignUpUrl');
// export const signOut = fn(actual.signOut).mockName('signOut');
