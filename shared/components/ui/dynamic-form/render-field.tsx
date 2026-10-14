"use client"

import { type UseFormReturn, Controller } from "react-hook-form"

import { Select } from "./inputs/select"
import { TextField } from "./inputs/text-field"
import { buildRules } from "./validation"
import type { IField } from "."

export interface IRenderField {
  field: IField
  form: UseFormReturn<any>
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: '"Inter", sans-serif',
  fontSize: 13,
  lineHeight: "18px",
  fontWeight: 500,
  marginBottom: 6,
}

const supportTextStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 4,
  marginTop: 6,
  fontFamily: '"Inter", sans-serif',
  fontSize: 12,
  lineHeight: "16px",
}

const RenderField = ({ field, form }: IRenderField) => {
  const rules = field.type !== "custom" ? buildRules(field.rules) : {}

  const fieldState = form.getFieldState(field.name, form.formState)
  const hasError =
    field.type !== "custom" &&
    !!form.formState.errors[field.name] &&
    (form.formState.isSubmitted || (!!field.showValidationErrorOnTouched && fieldState.isTouched))

  const errorMessage = form.formState.errors[field.name]?.message?.toString()

  return (
    <div className={field.fieldClassName}>
      {/* ── Label ───────────────────────────────────────────────── */}
      {field.type !== "custom" && field.label && (
        <label
          htmlFor={field.id ?? field.name}
          style={{
            ...labelStyle,
            color: field.disabled
              ? "var(--ui-color-muted-foreground)"
              : "var(--ui-color-foreground)",
          }}
        >
          {field.label}
        </label>
      )}

      {/* ── Custom element ──────────────────────────────────────── */}
      {field.type === "custom" && field.customElement}

      {/* ── Select ──────────────────────────────────────────────── */}
      {field.type === "select" && (
        <Controller
          name={field.name}
          control={form.control}
          rules={rules}
          render={({ field: ctrl }) => (
            <Select
              id={field.id ?? field.name}
              name={ctrl.name}
              options={field.options}
              placeholder={field.placeholder}
              disabled={field.disabled}
              loading={field.loading}
              error={!!field.hint?.hasError || hasError}
              fullWidth
              value={ctrl.value ?? ""}
              onChange={(val) => {
                ctrl.onChange(val)
                field.onChange?.(val)
              }}
            />
          )}
        />
      )}

      {/* ── Text Field ────────────────────────────────────────────── */}
      {field.type === "text" && (
        <Controller
          name={field.name}
          control={form.control}
          rules={rules}
          render={({ field: ctrl }) => (
            <TextField
              id={field.id ?? field.name}
              name={ctrl.name}
              placeholder={field.placeholder}
              disabled={field.disabled}
              error={!!field.hint?.hasError || hasError}
              fullWidth
              type={field.inputType}
              endAdornment={field.endAdornment}
              sx={field.sx}
              value={ctrl.value ?? ""}
              onChange={(val) => {
                ctrl.onChange(val)
                field.onChange?.(val)
              }}
              onBlur={() => {
                ctrl.onBlur()
                field.onBlur?.()
              }}
            />
          )}
        />
      )}

      {/* ── Validation error ────────────────────────────────────── */}
      {hasError && errorMessage && (
        <div
          style={{
            ...supportTextStyle,
            color: "var(--ui-color-destructive)",
          }}
        >
          <span role="alert">{errorMessage}</span>
        </div>
      )}

      {/* ── Hint text ───────────────────────────────────────────── */}
      {field.type !== "custom" && field.hint?.text && (
        <div
          style={{
            ...supportTextStyle,
            color: field.hint.hasError
              ? "var(--ui-color-destructive)"
              : "var(--ui-color-muted-foreground)",
          }}
        >
          {field.hint.icon && (
            <span style={{ display: "flex", flexShrink: 0 }}>{field.hint.icon}</span>
          )}
          <span>{field.hint.text}</span>
        </div>
      )}
    </div>
  )
}

export default RenderField
