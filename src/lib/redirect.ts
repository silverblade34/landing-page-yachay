"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const redirectUrl = "https://yachay.maquiadev.com";

export function getMobileRedirectUrl(transactionId: string): string {
  if (!redirectUrl) {
    throw new Error("Missing redirect URL");
  }

  return `${redirectUrl}?transactionId=${transactionId}`;
}

export function useRedirectWarning() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const redirectUrl = "https://yachay.maquiadev.com";

    if (!isLocalhost && !redirectUrl) {
      setTimeout(() => {
        toast.warning(
          "https://yachay.maquiadev.com is not set. Please set it in your environment variables for proper app redirects.",
          { duration: 10000 },
        );
      }, 1000);
    }
  }, []);
}
