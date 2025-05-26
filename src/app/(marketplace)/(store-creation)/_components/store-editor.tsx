"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { rawTRPCClient } from "@/trpc/client";
import { z } from "zod";

// 1. Zod schema for validation
const storeSchema = z.object({
  name: z.string().min(1, "Store name is required"),
  slug: z.string().min(1, "Slug is required"),
  isOnline: z.boolean(),
});

type StoreFormData = z.infer<typeof storeSchema>;

export default function StoreEditor() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [storeInfo, setStoreInfo] = useState<StoreFormData>({
    name: "",
    slug: "",
    isOnline: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof StoreFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setStoreInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!isLoaded || !user) return;

    const result = storeSchema.safeParse(storeInfo);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof StoreFormData, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof StoreFormData;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setGeneralError("");

    try {
      setIsSubmitting(true);
      await rawTRPCClient.stores.createStore.mutate(result.data);
      router.push("/"); // or redirect to `/store/${storeInfo.slug}`
    } catch (err) {
      console.error("Store creation failed:", err);
      setGeneralError("Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded mt-8 shadow">
      <h2 className="text-2xl font-semibold mb-6">Create Your Store</h2>

      {generalError && (
        <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
          {generalError}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Store Name</label>
        <input
          type="text"
          name="name"
          value={storeInfo.name}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="e.g. Emir's Emporium"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Store Slug</label>
        <input
          type="text"
          name="slug"
          value={storeInfo.slug}
          onChange={handleChange}
          className={`w-full border rounded px-3 py-2 ${
            errors.slug ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="e.g. emirs-emporium"
        />
        {errors.slug && (
          <p className="text-red-500 text-sm mt-1">{errors.slug}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="isOnline"
            checked={storeInfo.isOnline}
            onChange={handleChange}
            className="mr-2"
          />
          Make store live (public)
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Create Store"}
      </button>
    </div>
  );
}
