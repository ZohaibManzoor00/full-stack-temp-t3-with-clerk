import React from "react";

import { db } from "@/db/init";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export default async function CreateStorePage() {
  return <div>Create store page</div>;
}
