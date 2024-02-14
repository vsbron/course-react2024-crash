import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addFact as addFactApi } from "../services/apiFacts";

export function useAddFact() {
  // Getting the Query client by calling hook
  const queryClient = useQueryClient();

  // Add a fact
  // Getting isPending state and mutate function from useMutation hook
  const { isPending: isAdding, mutate: addFact } = useMutation({
    mutationFn: ({ text, source, category }) =>
      addFactApi(text, source, category),
    onSuccess: () => {
      // Invalidating "cabin" query
      queryClient.invalidateQueries({
        queryKey: ["facts"],
      });
    },
  });

  return { isAdding, addFact };
}
