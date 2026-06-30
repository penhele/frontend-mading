import { useFieldContext } from "@/hooks/use-app-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Field, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Textarea } from "../ui/textarea";

interface Props {
  label: string;
  placeholder?: string;
  isTextarea?: boolean;
  className?: string;
  readOnly?: boolean;
  isPassword?: boolean;
}

export default function InputField({
  label,
  placeholder,
  isTextarea,
  className,
  readOnly,
  isPassword,
}: Props) {
  const field = useFieldContext<string>();

  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (isPassword) {
      return showPassword ? "text" : "password";
    }
    return "text";
  };

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      {!isTextarea ? (
        <InputGroup>
          <InputGroupInput
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            placeholder={placeholder}
            className={className}
            readOnly={readOnly}
            type={getInputType()}
          />

          {isPassword && (
            <InputGroupAddon align={"inline-end"}>
              <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeOff />}
              </InputGroupButton>
            </InputGroupAddon>
          )}
        </InputGroup>
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
