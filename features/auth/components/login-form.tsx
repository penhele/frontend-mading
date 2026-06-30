"use client";

import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/contants/routes";

export default function LoginForm() {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: login,
    onMutate(variables, context) {
      const toastId = toast.loading("Loading...");
      return { toastId };
    },
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil", { id: onMutateResult.toastId });

      router.push(ROUTES.HOME);
    },
    onError(error, variables, onMutateResult, context) {
      toast.error(error.message, { id: onMutateResult?.toastId });
    },
  });

  const form = useAppForm({
    defaultValues: {
      username: "",
      password: "",
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
        className="space-y-4"
      >
        <form.AppField name="username">
          {(field) => (
            <field.InputField label="Username" placeholder="Username" />
          )}
        </form.AppField>

        <form.AppField name="password">
          {(field) => (
            <field.InputField
              label="Password"
              placeholder="••••••••"
              isPassword
            />
          )}
        </form.AppField>

        <form.SubmitButton label="Login" className="w-full" />
      </form>
    </form.AppForm>
  );
}
