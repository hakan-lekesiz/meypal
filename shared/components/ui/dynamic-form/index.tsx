"use client"

import { forwardRef, type ReactNode } from "react"
import type { UseFormReturn } from "react-hook-form"

import type { SelectOption } from "./inputs/select"
import type { IDefinedRule } from "./validation"
import RenderField from "./render-field"

export type { IDefinedRule, PredefinedRule } from "./validation"
export { buildRules } from "./validation"

// ─── Field type definitions ──────────────────────────────────────

export interface ISelectField {
  type: "select"
  options: SelectOption[]
  loading?: boolean
}

export interface ITextField {
  type: "text"
  inputType?: string // e.g., "email", "password", default "text"
  endAdornment?: ReactNode
  sx?: any // SxProps<Theme> from MUI
}

export interface ICustomField {
  type: "custom"
  customElement: ReactNode
}

/**
 * Union of all supported field types.
 * Extend by adding new interfaces and adding them to the union.
 */
export type IField = (ISelectField | ITextField | ICustomField) & {
  /** react-hook-form field name (used as form key) */
  name: string
  /** HTML id for the input element. Defaults to `name` if omitted. */
  id?: string
  /** Label rendered above the input */
  label?: string | ReactNode
  /** Placeholder text shown when no value is selected */
  placeholder?: string
  /** Disables the field */
  disabled?: boolean
  /** Validation rules. Accepts predefined strings or raw RegisterOptions. */
  rules?: (IDefinedRule | null)[]
  /** Show validation error only after field has been touched (not just submitted) */
  showValidationErrorOnTouched?: boolean
  /** Hint / helper text shown below the input */
  hint?: {
    text: string
    hasError?: boolean
    icon?: ReactNode
  }
  /** className applied to the field wrapper div (use Tailwind for layout) */
  fieldClassName?: string
  /** Called when the value changes */
  onChange?: (value: unknown) => void
  onBlur?: () => void
  onFocus?: () => void
}

// ─── Form group ──────────────────────────────────────────────────

export interface IFormGroup {
  fields: IField[]
  /** Hide this entire group */
  hidden?: boolean
  /** className applied to the group wrapper div (use Tailwind for layout) */
  className?: string
}

// ─── DynamicForm props ───────────────────────────────────────────

export interface IDynamicForm {
  id: string
  formGroups: IFormGroup[]
  /** Pass `form.handleSubmit(onValid)` here */
  handleSubmit: (e?: React.BaseSyntheticEvent) => void
  form: UseFormReturn<any>
  formHeader?: ReactNode
  formFooter?: ReactNode
}

// ─── Component ───────────────────────────────────────────────────

export const DynamicForm = forwardRef<HTMLFormElement, IDynamicForm>(function DynamicForm(
  { id, formGroups, handleSubmit, form, formHeader, formFooter },
  ref,
) {
  return (
    <form ref={ref} id={id} onSubmit={handleSubmit} autoComplete="off" noValidate>
      {formHeader}

      {formGroups
        .filter((group) => !group.hidden)
        .map((group) => (
          <div
            key={`${id}-g${group.fields.map((f) => f.name).join("-")}`}
            className={group.className}
          >
            {group.fields.map((field) => (
              <RenderField key={`${id}-${field.name}`} field={field} form={form} />
            ))}
          </div>
        ))}

      {formFooter}
    </form>
  )
})

DynamicForm.displayName = "DynamicForm"
