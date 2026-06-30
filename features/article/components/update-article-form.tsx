"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateArticle } from "../api/update-article";
import { useArticle } from "../hooks/use-article";
import { articleKeys } from "../queries/article-keys";
import { UpdateArticlePayload } from "../types/update-article-payload";
import ArticleForm from "./article-form";

interface Props {
  slug: string;
}

export default function UpdateArticleForm({ slug }: Props) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UpdateArticlePayload) => updateArticle(slug, data),
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");

      queryClient.invalidateQueries({ queryKey: articleKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  const { data: article } = useArticle(slug);
  console.log(article);

  return (
    <ArticleForm
      defaultValues={{
        title: article?.title ?? "",
        content: article?.content ?? "",
        imageUrl: article?.imageUrl ?? undefined,
        slug: article?.slug ?? "",
        status: article?.status ?? "DRAFT",
        userId: article?.user.id ?? "280fe306-3407-4495-9872-03efb79fbe6c",
        categoryId: article?.category.id ?? 0,
      }}
      onSubmit={async (value) => {
        await mutateAsync({ ...value, categoryId: Number(value.categoryId) });
      }}
    />
  );
}
