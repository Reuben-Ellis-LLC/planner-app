import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '#components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#components/ui/card';
import { withAuth, getSignInUrl, signOut } from '#app/actions/user';
import { NavBar } from '#components/ui/NavBar';

async function getData() {
  const user = await withAuth();
  return { user: user.user };
}

export default async function PricingPage() {
  const { user } = await getData();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar user={user} getSignInUrl={getSignInUrl} signOut={signOut} />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground">
              Select the perfect plan for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="$8"
              description="Essential features for individuals"
              features={['100 events/tasks', 'Basic support']}
              buttonText="Get Started"
            />
            <PricingCard
              title="Companion"
              price="$29"
              description="Ease and convenience"
              features={[
                '1 professional print',
                'Unlimited events/tasks',
                'Priority support',
              ]}
              buttonText="Upgrade to Companion"
              highlighted={true}
            />
            <PricingCard
              title="Virtual Assistant"
              price="$99"
              description="Maximize your time"
              features={[
                'Quarterly or 4 professional prints',
                'Unlimited events/tasks',
                'Priority dedicated support',
                'Priority feature requests',
              ]}
              buttonText="Upgrade to Virtual Assistant"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}) {
  return (
    <Card
      className={`flex flex-col ${
        highlighted ? 'border-primary shadow-lg' : ''
      }`}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-4xl font-bold mb-4">
          {price}
          <span className="text-xl font-normal text-muted-foreground">
            /month
          </span>
        </div>
        <ul className="space-y-2" aria-label={`Features of ${title} plan`}>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? 'default' : 'outline'}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
