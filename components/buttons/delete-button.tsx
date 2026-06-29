"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface Props<TId = string | number> {
  id: TId;
  mutationFn: (id: TId) => Promise<unknown>;
  queryKey: readonly unknown[];
}

export default function DeleteButton<TId = string | number>({
  id,
  mutationFn,
  queryKey,
}: Props<TId>) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn,
    onMutate(variables, context) {
      const toastId = toast.loading("Loading...");
      return { toastId };
    },
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil", { id: onMutateResult.toastId });

      queryClient.invalidateQueries({ queryKey });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal", { id: onMutateResult?.toastId });
    },
  });

  return (
    <Button variant={"outline"} size={"icon-xs"} onClick={() => mutate(id)}>
      <Trash2 />
    </Button>
  );
}
