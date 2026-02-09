"use client";

import { useUser } from "@clerk/nextjs";
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export function SentryUserInit() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      Sentry.setUser({
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username ?? undefined,
      });
    } else {
      Sentry.setUser(null);
    }
  }, [user]);

  return null;
}
