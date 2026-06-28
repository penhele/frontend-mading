import { useFieldContext } from "@/hooks/use-app-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, FieldLabel } from "../ui/field";

interface Props {
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
}

export default function SelectField({ label, placeholder, options }: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <Select value={field.state.value} onValueChange={field.handleChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
