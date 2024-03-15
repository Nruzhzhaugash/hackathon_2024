"use client";

import { sign } from "crypto";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Logo from "@/shared/ui/icons/google/logo";

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/profile";

  return (
    <button onClick={() => signIn("google", { callbackUrl })}>
      <Logo />
    </button>
  );
};

export { GoogleButton };
