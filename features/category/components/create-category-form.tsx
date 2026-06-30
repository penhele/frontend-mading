"use client";

import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "../api/add-category";
import { toast } from "sonner";
import { categoryKeys } from "../queries/category-keys";
import { getSlugify } from "@/lib/utils/get-slugtify";

interface Props {
  className?: string;
}

export default function CreateCategoryForm({ className }: Props) {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: addCategory,
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");

      queryClient.invalidateQueries({ queryKey: categoryKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
      slug: "",
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
