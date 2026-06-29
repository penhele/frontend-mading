import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface Props {
  label: string;
  placeholder?: string;
  isTextarea?: boolean;
  className?: string;
  readOnly?: boolean;
}

export default function InputField({
  label,
  placeholder,
  isTextarea,
  className,
  readOnly,
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
          readOnly={readOnly}
        />
      ) : (
        <Textarea
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          placeholder={placeholder}
          className={className}
          readOnly={readOnly}
        />
      )}
    </Field>
  );
}
