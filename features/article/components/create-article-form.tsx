"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import ArticleForm from "./article-form";
import { addArticle } from "../api/add-article";
import { toast } from "sonner";
import { articleKeys } from "../queries/article-keys";
import { Card, CardContent } from "@/components/ui/card";
import { useMe } from "@/features/auth/hooks/use-me";

export default function CreateArticleForm() {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useMe();

  const { mutateAsync } = useMutation({
    mutationFn: addArticle,
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");

      queryClient.invalidateQueries({ queryKey: articleKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  if (isLoading) {
    return <div className="text-center py-4">Memuat data pengguna...</div>;
  }

  return (
    <ArticleForm
      defaultValues={{
        title: "",
        content: "",
        imageUrl: undefined,
        slug: "",
        status: "DRAFT",
        userId: user?.id ?? "",
        categoryId: 0,
      }}
      onSubmit={async (value) => {
        await mutateAsync({ ...value, categoryId: Number(value.categoryId) });
      }}
    />
  );
}

