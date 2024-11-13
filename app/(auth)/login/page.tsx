import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";
import AuthBg from '@/public/_static/auth_bg.jpg'
import LogoDark from '@/public/logo_dark.png';
import LogoWhite from '@/public/logo_light.png';

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0 ">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Back
      </Link>
      <div className="hidden h-full bg-muted lg:block relative">
        {/* Add your image here */}
        <Image
          src={AuthBg} // Replace with the path to your image
          alt="Decorative Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="mx-auto">
              <Image
                src={LogoDark}
                width={150}
                alt="logo"
                className="inline-block dark:hidden mb-4"
              />
              <Image
                src={LogoWhite}
                alt="logo dark version"
                width={150}
                className="hidden dark:inline-block mb-4"
              />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <Suspense>
            <UserAuthForm />
          </Suspense>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
