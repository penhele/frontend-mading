import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface Props {
  label: string;
  placeholder?: string;
  isTextarea?: boolean;
  className?: string;
}

export default function InputField({
  label,
  placeholder,
  isTextarea,
  className,
}: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      {!isTextarea ? (
        <Input
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder={placeholder}
          className={className}
        />
      ) : (
        <Textarea
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder={placeholder}
          className={className}
        />
      )}
    </Field>
  );
}
