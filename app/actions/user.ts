'use server';
import { getUser } from '@workos-inc/authkit-nextjs';

export async function fetchUser() {
  const { user } = await getUser();
  return user;
}

export const getUserWorkOS = getUser;
