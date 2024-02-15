import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteFact as deleteFactApi } from "../services/apiFacts";

export function useDeleteFact() {
  // Getting the Query client by calling hook
  const queryClient = useQueryClient();

  // Delete the fact
  // Getting isPending state and mutate function from useMutation hook
  const { isPending: isDeleting, mutate: deleteFact } = useMutation({
    mutationFn: (id) => deleteFactApi(id),
    onSuccess: () => {
      // Invalidating "cabin" query
      queryClient.invalidateQueries({
        queryKey: ["facts"],
      });
    },
  });

  return { isDeleting, deleteFact };
}
