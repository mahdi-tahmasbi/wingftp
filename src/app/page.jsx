import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href={"/auth/admin"}>Admin Login</Link>
      <Link href={"/auth/client"}>Client Login</Link>
    </div>
  );
}
