import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getFacts } from "../services/apiFacts";

export function useFacts() {
  // Getting the state from URL
  const [searchParams] = useSearchParams();

  //// FILTERING
  // Getting the filtered value from the search params
  const currentCategory = searchParams.get("category") || "all";

  //// QUERY
  const {
    isLoading,
    data: { facts } = {},
    error,
  } = useQuery({
    // Adding filter object to make an app refetch the data when filter is changed (works like dependency array)
    queryKey: ["facts", currentCategory],
    queryFn: () => getFacts({ currentCategory }),
  });

  return { isLoading, facts, error };
}
