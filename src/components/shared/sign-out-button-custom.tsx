"use client";

import { SignOutButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignInOutButton() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null

  if (isSignedIn) {
    return (
      <>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </>
    );
  }

  return (
    <SignUpButton>
      <Button>Sign Up</Button>
    </SignUpButton>
  );
}
