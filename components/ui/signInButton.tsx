import { Button, Flex } from '@radix-ui/themes';

export async function SignInButton({
  large,
  user,
  getSignInUrl,
  signOut,
}: {
  large?: boolean;
  user: any;
  getSignInUrl: any;
  signOut: any;
}) {
  const authorizationUrl = await getSignInUrl();

  if (user) {
    return (
      <Flex gap="3">
        {'Hello'}
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button
            type="submit"
            size={large ? '3' : '2'}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Sign Out
          </Button>
        </form>
      </Flex>
    );
  }

  return (
    <Button
      asChild
      size={large ? '3' : '2'}
      className="text-sm font-medium hover:underline underline-offset-4"
    >
      <a href={authorizationUrl}>Sign In {large && 'with AuthKit'}</a>
    </Button>
  );
}
