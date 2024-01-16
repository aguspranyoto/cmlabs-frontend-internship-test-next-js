"use client";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  router.push("/category");

  return <div>Redirecting to category...</div>;
}
