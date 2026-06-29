"use client";

import { useAppForm } from "@/hooks/use-app-form";
import {
  ArticleFormValues,
  createArticleSchema,
} from "../schemas/article.schema";
import { revalidateLogic } from "@tanstack/react-form";
import { getSlugify } from "@/lib/utils/get-slugtify";
import { useCategories } from "@/features/category/hooks/use-categories";
import { Card, CardContent } from "@/components/ui/card";
import { Clock9, Eye } from "lucide-react";
import { getCurrentTime } from "@/lib/utils/get-current-time";
import { Badge } from "@/components/ui/badge";

interface Props {
  defaultValues: ArticleFormValues;
  onSubmit: (values: ArticleFormValues) => void;
}

export default function ArticleForm({ defaultValues, onSubmit }: Props) {
  const form = useAppForm({
    defaultValues,
    validators: {
      onChange: createArticleSchema,
    },
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    onSubmit: async ({ value }) => {
      await onSubmit(value);
    },
  });

  const { data = [] } = useCategories();
  const categories = data.map((item) => ({
    label: item.name,
    value: item.id.toString(),
  }));

  return (
    <div className="grid grid-cols-3 gap-4">
      <form.AppForm>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4 grid-cols-2"
        >
          <form.AppField
            name="title"
            listeners={{
              onChange: ({ value }) => {
                form.setFieldValue("slug", getSlugify(value));
              },
            }}
          >
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
            data.find((item) => item.id === Number(categoryId))?.name ||
            "Kategori";

          return (
            <div className="col-span-2 flex flex-col space-y-2">
              <div className="flex flex-row items-center gap-2 text-xs text-muted-foreground">
                <Eye size={12} />
                <span>Pratinjau Langsung (Live Preview)</span>
              </div>

              <Card className="border-dashed">
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <Badge variant={"outline"}>{categoryName}</Badge>

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
            </div>
          );
        }}
      </form.Subscribe>
    </div>
  );
}
