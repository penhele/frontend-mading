import { useFormContext } from "@/hooks/use-app-form";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

interface Props {
  className?: string;
  label?: string;
}

export default function SubmitButton({ className, label = "Submit" }: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        canSubmit: state.canSubmit,
      })}
    >
      {({ isSubmitting, canSubmit }) => (
        <Button
          type="submit"
          // disabled={!canSubmit || isSubmitting}
          className={cn("min-w-24", className)}
        >
          {isSubmitting ? <Spinner /> : label}
        </Button>
      )}
    </form.Subscribe>
  );
}
