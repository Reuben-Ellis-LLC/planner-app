'use server';
import {
  getUser,
  getSignInUrl,
  getSignUpUrl,
  signOut,
} from '@workos-inc/authkit-nextjs';

export type User = {
  sessionId: string;
  user: {
    object: string;
    id: string;
    email: string;
    emailVerified: boolean;
    firstName: string;
    profilePictureUrl: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
};
export { getUser, getSignInUrl, getSignUpUrl, signOut };
