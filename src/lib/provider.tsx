"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchInterval: 0,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
          useErrorBoundary: true,
        },
      },
    }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
