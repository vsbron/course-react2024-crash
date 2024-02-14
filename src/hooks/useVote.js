import { useMutation, useQueryClient } from "@tanstack/react-query";

import { registerVote } from "../services/apiFacts";

export function useVote() {
  // Getting the Query client by calling hook
  const queryClient = useQueryClient();

  // Add a vote
  // Getting isPending state and mutate function from useMutation hook
  const { isPending: isVoting, mutate: addVote } = useMutation({
    mutationFn: ({ columnName, newValue, id }) =>
      registerVote(columnName, newValue, id),
    onSuccess: () => {
      // Invalidating "cabin" query
      queryClient.invalidateQueries({ queryKey: ["facts"] });
    },
  });

  return { isVoting, addVote };
}
