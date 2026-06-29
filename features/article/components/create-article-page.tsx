"use client";

import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { addArticle } from "../api/add-article";
import { toast } from "sonner";
import { useCategories } from "@/features/category/hooks/use-categories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock9 } from "lucide-react";
import { getCurrentTime } from "@/lib/utils/get-current-time";
import { useEffect } from "react";
import { getSlugify } from "@/lib/utils/get-slugtify";

export default function CreateArticlePage() {
  const { mutateAsync } = useMutation({
    mutationFn: addArticle,
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  const form = useAppForm({
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      status: "",
      userId: "",
      categoryId: 0,
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
    },
  });

  const { data = [] } = useCategories();
  const categories = data.map((item) => ({
    label: item.name,
    value: item.id.toString(),
  }));

  const title = form.getFieldValue("title");
  console.log(title);
  console.log(getSlugify(title));

  useEffect(() => {
    const slug = getSlugify(title);

    form.setFieldValue("slug", slug);
  }, [title]);

  return (
    <div className="grid grid-cols-3 gap-4">
      <form.AppForm>
        <form action="" className="space-y-4 grid-cols-2">
          <form.AppField name="title">
            {(field) => (
              <field.InputField label="Judul" placeholder="The Open House" />
            )}
          </form.AppField>

          <form.AppField name="slug">
            {(field) => (
              <field.InputField
                label="Tautan URL"
                placeholder="The Open House"
                readOnly
              />
            )}
          </form.AppField>

          <form.AppField name="categoryId">
            {(field) => (
              <field.SelectField
                label="Kategori"
                placeholder="The Open House"
                options={categories}
              />
            )}
          </form.AppField>

          <form.AppField name="content">
            {(field) => (
              <field.InputField
                label="Konten"
                placeholder="The Open House"
                isTextarea
              />
            )}
          </form.AppField>

          <form.SubmitButton />
        </form>
      </form.AppForm>

      <form.Subscribe
        selector={(state) => ({
          title: state.values.title,
          slug: state.values.slug,
          categoryId: state.values.categoryId,
          content: state.values.content,
        })}
      >
        {({ title, slug, categoryId, content }) => {
          const categoryName =
            data.find((item) => item.id === categoryId)?.name || "Kategori";

          return (
            <Card className="col-span-2">
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <div>{categoryName}</div>

                  <div className="flex flex-row items-center gap-1">
                    <Clock9 size={12} />
                    {getCurrentTime()}
                  </div>
                </div>

                <div className="aspect-video bg-muted rounded-lg" />

                <div className="space-y-1">
                  <h1 className="text-2xl font-bold">
                    {title || "Judul Artikel"}
                  </h1>

                  <p className="text-sm whitespace-pre-wrap text-muted-foreground">
                    {content ||
                      `Mulailah menulis artikel Anda. Preview konten akan ditampilkan di sini secara real-time sehingga Anda dapat melihat bagaimana artikel akan terlihat oleh pembaca.`}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        }}
      </form.Subscribe>
    </div>
  );
}
