"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { rawTRPCClient } from "@/trpc/client"; // adjust path if needed

export default function CreateStorePage() {
  const { user, isLoaded } = useUser();
  console.log(user);

  useEffect(() => {
    if (isLoaded && user) {
      rawTRPCClient.users.createUser.mutate({
        id: user.id,
        email: user.emailAddresses[0].emailAddress,
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
      });
    }
  }, [isLoaded, user]);

  return <div>Create your store</div>;
}
