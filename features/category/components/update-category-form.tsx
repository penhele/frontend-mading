"use client";

import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { getSlugify } from "@/lib/utils/get-slugtify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateCategory } from "../api/update-category";
import { useCategory } from "../hooks/use-category";
import { categoryKeys } from "../queries/category-keys";
import { UpdateCategoryPayload } from "../types/update-category-payload";

interface Props {
  className?: string;
  id:number
}

export default function UpdateCategoryForm({ id, className }: Props) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UpdateCategoryPayload)=> updateCategory(id, data),
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");

      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  const {data: category} = useCategory(id)

  const form = useAppForm({
    defaultValues: {
      name: category?.name ??'',
      slug: category?.slug ?? '',
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className={cn("space-y-4", className)}
      >
        <form.AppField
          name="name"
          listeners={{
            onChange: ({ value }) => {
              form.setFieldValue("slug", getSlugify(value));
            },
          }}
        >
          {(field) => <field.InputField label="Kategori" />}
        </form.AppField>

        <form.AppField name="slug">
          {(field) => <field.InputField label="Slug" readOnly />}
        </form.AppField>

        <form.SubmitButton label="Save" />
      </form>
    </form.AppForm>
  );
}
