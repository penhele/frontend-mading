"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import ArticleForm from "./article-form";
import { addArticle } from "../api/add-article";
import { toast } from "sonner";
import { articleKeys } from "../queries/article-keys";

export default function CreateArticleForm() {
  const queryClient = useQueryClient();

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

  return (
    <ArticleForm
      defaultValues={{
        title: "",
        content: "",
        imageUrl: undefined,
        slug: "",
        status: "DRAFT",
        userId: "280fe306-3407-4495-9872-03efb79fbe6c",
        categoryId: 0,
      }}
      onSubmit={async (value) => {
        await mutateAsync({ ...value, categoryId: Number(value.categoryId) });
      }}
    />
  );
}
