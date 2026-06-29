"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import ArticleForm from "./article-form";
import { addArticle } from "../api/add-article";
import { toast } from "sonner";
import { articleKeys } from "../queries/article-keys";
import { useArticle } from "../hooks/use-article";

interface Props {
  id: string;
}

export default function UpdateArticleForm({ id }: Props) {
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

  const { data: article } = useArticle(id);
  console.log(article);

  return (
    <ArticleForm
      defaultValues={{
        title: article?.title ?? "",
        content: article?.content ?? "",
        imageUrl: article?.imageUrl ?? undefined,
        slug: article?.slug ?? "",
        status: article?.status ?? "DRAFT",
        userId: article?.status ?? "280fe306-3407-4495-9872-03efb79fbe6c",
        categoryId: article?.category.id ?? 0,
      }}
      onSubmit={async (value) => {
        await mutateAsync({ ...value, categoryId: Number(value.categoryId) });
      }}
    />
  );
}
