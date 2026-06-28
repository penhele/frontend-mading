"use client";

import InputField from "@/components/field/input-field";
import SelectField from "@/components/field/select-field";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    InputField,
    SelectField,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
