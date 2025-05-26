"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { rawTRPCClient } from "@/trpc/client";
import StoreEditor from "../_components/store-editor";

export default function CreateStorePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [hasStore, setHasStore] = useState<boolean | null>(null); // null = unknown
  const [checked, setChecked] = useState(false);
  const [isEditingStore, setIsEditingStore] = useState(false);

  useEffect(() => {
    if (!isLoaded || !user || checked) return;

    const checkAndMaybeCreateUser = async () => {
      try {
        const userId = user.id;

        // Step 1: check if user exists
        const existingUser = await rawTRPCClient.users.getUserById.query({
          id: userId,
        });

        if (!existingUser) {
          await rawTRPCClient.users.createUser.mutate({
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName ?? "",
            lastName: user.lastName ?? "",
          });
        }

        // Step 2: check if user already has a store
        const store = await rawTRPCClient.stores.getStoreByOwnerId.query({
          ownerId: userId,
        });

        if (store) {
          setHasStore(true); // Let UI render decision
        } else {
          setHasStore(false); // Allow store creation
        }
      } catch (err) {
        console.error("Error during store/user check", err);
      } finally {
        setChecked(true);
      }
    };

    checkAndMaybeCreateUser();
  }, [isLoaded, user, checked]);

  // loading fallback
  if (!checked || hasStore === null) {
    return <div>Loading...</div>;
  }

  // ✅ User has a store → offer redirect or button
  if (hasStore) {
    router.push("/");
  }

  // ✅ User has no store → allow store creation
  return (
    <div>
      {isEditingStore ? (
        <StoreEditor />
      ) : (
        <div className="flex justify-between mx-4">
          <button
            onClick={() => setIsEditingStore(true)}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Create my store
          </button>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={() => router.push("/")}
          >
            Skip for now
          </button>
        </div>
      )}
    </div>
  );
}
