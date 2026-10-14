import type { RegisterOptions } from "react-hook-form"

export type PredefinedRule = "required" | "email" | "phone" | "numeric" | "minLength" | "maxLength"

export interface IDefinedRule {
  rule: PredefinedRule | RegisterOptions
  /** Error message shown when validation fails */
  message: string
  /** Numeric threshold for minLength / maxLength rules */
  value?: number
}

const PREDEFINED: Record<string, (r: IDefinedRule) => RegisterOptions> = {
  required: (r) => ({ required: r.message }),
  email: (r) => ({
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
      message: r.message,
    },
  }),
  phone: (r) => ({
    pattern: {
      value: /^[0-9\s\-+()]{7,15}$/,
      message: r.message,
    },
  }),
  numeric: (r) => ({
    pattern: {
      value: /^[0-9]+$/,
      message: r.message,
    },
  }),
  minLength: (r) => ({
    minLength: { value: r.value ?? 0, message: r.message },
  }),
  maxLength: (r) => ({
    maxLength: { value: r.value ?? 0, message: r.message },
  }),
}

/**
 * Converts an IDefinedRule array into a react-hook-form RegisterOptions object.
 * Accepts both predefined string rules and raw RegisterOptions objects.
 */
export function buildRules(rules?: (IDefinedRule | null)[]): RegisterOptions {
  if (!rules || rules.length === 0) return {}
  return Object.assign(
    {},
    ...rules
      .filter((r): r is IDefinedRule => r !== null)
      .map((r) => {
        if (typeof r.rule === "string") {
          return PREDEFINED[r.rule]?.(r) ?? {}
        }
        return r.rule
      }),
  )
}
