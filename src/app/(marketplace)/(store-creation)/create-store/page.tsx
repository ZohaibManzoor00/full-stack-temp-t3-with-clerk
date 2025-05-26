"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { rawTRPCClient } from "@/trpc/client";

export default function CreateStorePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isLoaded || !user || checked) return;

    const checkAndCreateUser = async () => {
      try {
        const existing = await rawTRPCClient.users.getUserById.query({
          id: user.id,
        });

        if (existing) {
          router.push("/");
        } else {
          await rawTRPCClient.users.createUser.mutate({
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
          });
        }
      } catch (err) {
        console.error("User creation/check failed:", err);
      } finally {
        setChecked(true);
      }
    };

    checkAndCreateUser();
  }, [isLoaded, user, checked]);

  return <div>Create your store</div>;
}
