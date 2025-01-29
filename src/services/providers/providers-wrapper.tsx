"use client";

import ClientProviders from "@/services/providers/client-providers";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientProviders>{children}</ClientProviders>;
}
