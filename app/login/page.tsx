import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';
import { Github, Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>选择登录方式</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <form
            action={async () => {
              'use server';
              await signIn('google', {
                redirectTo: '/'
              });
            }}
            className="w-full"
          >
            <Button
              className="w-full flex justify-between items-center"
              variant="outline"
            >
              <span>Sign in with Google</span>
              <Image
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google"
                width={24}
                height={24}
              />
            </Button>
          </form>

          <form
            action={async () => {
              'use server';
              await signIn('github', {
                redirectTo: '/'
              });
            }}
            className="w-full"
          >
            <Button
              className="w-full flex justify-between items-center"
              variant="outline"
            >
              <span>Sign in with GitHub</span>
              <Image
                src="https://authjs.dev/img/providers/github.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
