import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <h1>Hello</h1>
      <Button>
        <Link href="/dashboard">View Dashboard</Link>
      </Button>
    </>
  );
}
