import { Button } from '@radix-ui/themes';
import { cn } from '#lib/utils';

export async function SignInButton({
  large,
  user,
  getSignInUrl,
  signOut,
  variant = 'classic',
  classNames,
}: {
  large?: boolean;
  user: any;
  getSignInUrl: any;
  signOut: any;
  variant?:
    | 'surface'
    | 'classic'
    | 'soft'
    | 'outline'
    | 'solid'
    | 'ghost'
    | undefined;
  classNames?: string;
}) {
  const authorizationUrl = await getSignInUrl();

  if (user) {
    return (
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
        className="flex items-center"
      >
        <Button
          size={large ? '3' : '2'}
          type="submit"
          className="text-sm h-5 cursor-pointer font-medium hover:underline underline-offset-4"
          variant={variant}
          role="button"
          title="Sign Out"
        >
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <Button
      asChild
      title="Sign In"
      size={large ? '3' : '2'}
      className={cn(
        'text-sm h-5 cursor-pointer font-medium hover:underline underline-offset-4',
        classNames
      )}
    >
      <a href={authorizationUrl}>Sign In {large && 'with AuthKit'}</a>
    </Button>
  );
}
