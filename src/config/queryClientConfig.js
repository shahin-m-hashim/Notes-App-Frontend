import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // initial Request + 1st retry + 2nd retry
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 1 * 60 * 60 * 1000, // 1 hour
    },
  },
});

export default queryClient;
