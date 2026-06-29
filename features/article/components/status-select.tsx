import { useMutation } from "@tanstack/react-query";
import { updateArticle } from "../api/update-article";
import { UpdateArticlePayload } from "../types/update-article-payload";
import { toast } from "sonner";
import { useAppForm } from "@/hooks/use-app-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Props {
  articleId: string;
  status: string;
}

export default function StatusSelect({ articleId, status }: Props) {
  const { mutate } = useMutation({
    mutationFn: (data: UpdateArticlePayload) => updateArticle(articleId, data),
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  const form = useAppForm({
    defaultValues: {
      status,
    },
    onSubmit: ({ value }) => {
      mutate(value);
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={() => {
          form.handleSubmit();
        }}
      >
        <form.AppField name="status">
          {(field) => (
            <Select
              value={field.state.value}
              onValueChange={(value) => {
                field.handleChange(value);
                form.handleSubmit();
              }}
            >
              <SelectTrigger variant="ghost">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    field.state.value === "PUBLISHED"
                      ? "bg-green-400"
                      : "bg-gray-400",
                  )}
                />
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
              </SelectContent>
            </Select>
          )}
        </form.AppField>
      </form>
    </form.AppForm>
  );
}
